import React, { useState } from 'react';
import TopNavBar from '../components/TopNavBar';

export default function SellerDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "Alphonso Mangoes (1 Dozen)",
      description: "Direct from Ratnagiri farms. Export quality.",
      price: 1200,
      image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Handcrafted Brass Diyas",
      description: "Set of 4. Traditional Moradabad design.",
      price: 850,
      image: "https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&w=800&q=80"
    }
  ]);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [step, setStep] = useState<'upload' | 'processing' | 'result'>('upload');

  const processingSteps = [
    "Analyzing your reel...",
    "Detecting product...",
    "Generating listing...",
    "Estimating price...",
    "Almost done...",
  ];
  const [processingStep, setProcessingStep] = useState(0);

  const handleUpload = async () => {
    if (!selectedFile) return;

    setStep('processing');
    setUploading(true);

    // Show fake processing animation
    let i = 0;
    const interval = setInterval(() => {
      setProcessingStep(i);
      i++;
      if (i >= processingSteps.length) clearInterval(interval);
    }, 600);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("http://127.0.0.1:8000/upload-reel", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setAiResult(data);
      setStep('result');
    } catch (error) {
      alert("Backend not running! Start uvicorn first.");
      setStep('upload');
    }

    setUploading(false);
  };

  const handlePublish = () => {
    if (!aiResult) return;

    // Add new listing to the page
    const newListing = {
      id: listings.length + 1,
      title: aiResult.title,
      description: aiResult.description,
      price: aiResult.price,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80"
    };

    setListings([newListing, ...listings]);
    setShowModal(false);
    setStep('upload');
    setAiResult(null);
    setSelectedFile(null);
  };

  return (
    <div className="antialiased min-h-screen flex flex-col pt-24 bg-background text-on-background">
      <TopNavBar />

      <main className="flex-grow max-w-7xl mx-auto w-full px-container-padding flex gap-8">
        {/* Left Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 flex-shrink-0 sticky top-28 h-[calc(100vh-8rem)]">
          <div className="bg-[#dcc66e] rounded-3xl p-6 shadow-sm mb-6 border border-[#c5b15f]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-[#534600] uppercase mb-1">Reputation Tier</p>
                <h3 className="font-display-bold text-headline-lg-mobile text-[#221b00] leading-none">Gold Seller</h3>
              </div>
              <span className="material-symbols-outlined text-[#534600] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            </div>
            <div className="inline-flex items-center gap-1 bg-[#f9e287] text-[#221b00] px-3 py-1 rounded-full text-xs font-bold mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              On-chain Verified
            </div>
            <p className="text-sm text-[#534600] leading-snug">Top 5% of Local Heroes in your area.</p>
          </div>

          <div className="bg-surface-container-low rounded-3xl p-4 shadow-sm flex flex-col gap-2">
            <a href="#" className="flex items-center gap-4 bg-secondary-container text-on-secondary-container px-4 py-3 rounded-2xl font-bold transition-all">
              <span className="material-symbols-outlined">inventory_2</span>
              <span className="font-title-md text-sm">Manage Listings</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-on-surface-variant hover:bg-surface-container-high px-4 py-3 rounded-2xl transition-all">
              <span className="material-symbols-outlined">bar_chart</span>
              <span className="font-title-md text-sm">Sales Analytics</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-on-surface-variant hover:bg-surface-container-high px-4 py-3 rounded-2xl transition-all">
              <span className="material-symbols-outlined">podcasts</span>
              <span className="font-title-md text-sm">Go Live (BazaarCast)</span>
            </a>
          </div>
        </aside>

        {/* Main Area */}
        <section className="flex-grow flex flex-col w-full">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="font-display-bold text-display-bold text-on-surface">Active Listings</h1>
              <p className="font-body-md text-on-surface-variant mt-1">Manage your storefront and boost top products.</p>
            </div>
            <button
              onClick={() => { setShowModal(true); setStep('upload'); setAiResult(null); }}
              className="bg-primary-container text-white px-6 py-3 rounded-full font-title-md text-sm font-bold flex items-center gap-2 hover:bg-primary transition-colors shadow-md"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              Naya Item (Add New)
            </button>
          </div>

          {/* Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listings.map((listing) => (
              <div key={listing.id} className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/20 flex flex-col">
                <div className="relative h-48 w-full bg-surface-container">
                  <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Ekdum Asli
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-headline-lg-mobile text-[22px] text-on-surface mb-2 leading-tight">{listing.title}</h3>
                  <p className="font-body-md text-sm text-on-surface-variant mb-6 flex-grow">{listing.description}</p>
                  <div className="flex justify-between items-end mt-auto">
                    <div>
                      <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider mb-1">Current Price</p>
                      <p className="font-display-bold text-headline-lg text-primary">₹{listing.price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
                        <span className="material-symbols-outlined text-[20px]">edit</span>
                      </button>
                      <button className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-bold hover:brightness-95 transition-all shadow-sm">
                        Boost
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl">

            {/* STEP 1 - Upload */}
            {step === 'upload' && (
              <div>
                <h2 className="text-2xl font-bold mb-2">Upload Product Reel</h2>
                <p className="text-gray-500 text-sm mb-6">AI will auto-generate your listing ✨</p>

                <label className="block w-full border-2 border-dashed border-orange-300 rounded-2xl p-8 text-center cursor-pointer hover:border-orange-500 transition-colors mb-6">
                  <span className="material-symbols-outlined text-4xl text-orange-400 mb-2 block">upload_file</span>
                  <span className="text-gray-600 font-medium">
                    {selectedFile ? selectedFile.name : "Click to select video or image"}
                  </span>
                  <input
                    type="file"
                    accept="video/*,image/*"
                    className="hidden"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  />
                </label>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-full font-bold hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpload}
                    disabled={!selectedFile}
                    className="flex-1 bg-orange-500 text-white py-3 rounded-full font-bold disabled:opacity-40 hover:bg-orange-600 transition-colors"
                  >
                    Generate with AI →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 - Processing Animation */}
            {step === 'processing' && (
              <div className="text-center py-8">
                <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                <h2 className="text-xl font-bold mb-2">AI is working...</h2>
                <p className="text-orange-500 font-medium">{processingSteps[processingStep]}</p>
              </div>
            )}

            {/* STEP 3 - AI Result */}
            {step === 'result' && aiResult && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">✨</span>
                  <h2 className="text-2xl font-bold">AI Generated Listing</h2>
                </div>

                <div className="bg-orange-50 rounded-2xl p-4 mb-4 space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Title</p>
                    <p className="font-bold text-gray-800">{aiResult.title}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Price</p>
                    <p className="font-bold text-orange-500 text-xl">₹{aiResult.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Description</p>
                    <p className="text-gray-700 text-sm">{aiResult.description}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {aiResult.tags?.map((tag: string) => (
                        <span key={tag} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep('upload')}
                    className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-full font-bold hover:bg-gray-50"
                  >
                    Re-upload
                  </button>
                  <button
                    onClick={handlePublish}
                    className="flex-1 bg-orange-500 text-white py-3 rounded-full font-bold hover:bg-orange-600 transition-colors"
                  >
                    Publish Listing 🚀
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}