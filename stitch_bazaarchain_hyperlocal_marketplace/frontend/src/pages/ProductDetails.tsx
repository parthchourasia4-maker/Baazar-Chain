import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import TopNavBar from '../components/TopNavBar';

export default function ProductDetails() {
  const { addToCart, setIsCartOpen, cartCount } = useCart();

  return (
    <div className="antialiased min-h-screen bg-background text-on-background font-body-md pb-24 pt-24">
      <TopNavBar />

      <main className="max-w-6xl mx-auto px-container-padding pt-4">
        
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 text-on-surface-variant text-sm font-medium mb-6">
          <Link to="/deals" className="hover:bg-surface-container-high p-2 rounded-full transition-colors flex items-center justify-center -ml-2 mr-2">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <Link to="/deals" className="hover:text-primary transition-colors">Group Buys</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-on-surface font-bold">Premium Ratnagiri Alphonso</span>
        </div>
        
        {/* Top Section: Images & Main Info */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          
          {/* Left Column: Images */}
          <div className="w-full lg:w-5/12 flex flex-col gap-4">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-surface-container-lowest shadow-sm border border-outline-variant/20">
              <img src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1000&q=80" alt="Mangoes in basket" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-error text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                Hot Deal
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-xl border-2 border-primary overflow-hidden cursor-pointer">
                <img src="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=200&q=80" alt="Thumb 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-20 h-20 rounded-xl border border-outline-variant/30 overflow-hidden cursor-pointer hover:border-primary/50 transition-colors">
                <img src="https://images.unsplash.com/photo-1605080590422-045b16954a2a?auto=format&fit=crop&w=200&q=80" alt="Thumb 2" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="w-20 h-20 rounded-xl border border-outline-variant/30 overflow-hidden cursor-pointer relative hover:border-primary/50 transition-colors">
                <img src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=200&q=80" alt="Thumb 3" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined drop-shadow-md">play_circle</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="w-full lg:w-7/12 flex flex-col mt-6 lg:mt-0">
            <h1 className="font-display-bold text-3xl md:text-[36px] leading-tight text-on-surface mb-4">
              Premium Ratnagiri Alphonso<br/>Mangoes (1 Dozen)
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display-bold text-4xl md:text-[40px] text-primary leading-none">₹850</span>
              <span className="text-on-surface-variant line-through text-xl md:text-2xl font-medium mt-1 md:mt-2">₹1200</span>
              <span className="bg-[#dcc66e] text-[#534600] px-3 py-1 rounded-full text-xs md:text-sm font-bold tracking-wider mt-1 md:mt-2 shadow-sm">29% Off</span>
            </div>

            <p className="font-body-md text-on-surface-variant mb-8 text-lg leading-relaxed">
              Freshly handpicked from the organic farms of Ratnagiri. Delivered directly to your society within 24 hours of harvest. Sweetness guaranteed!
            </p>

            {/* Seller Card */}
            <div className="bg-surface-container-lowest border border-[#89f5e7] rounded-3xl p-6 mb-6 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <img src="https://images.unsplash.com/photo-1506869640319-ce1a44a1e86d?auto=format&fit=crop&w=100&q=80" alt="Farmer" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h3 className="font-title-md text-lg font-bold text-on-surface leading-tight">Ramesh Farms</h3>
                    <div className="flex items-center text-secondary text-sm font-bold mt-1">
                      <span className="material-symbols-outlined text-[16px] mr-1">location_on</span>
                      Pune, Maharashtra
                    </div>
                  </div>
                </div>
                <div className="bg-[#e9fbf9] border border-[#89f5e7] px-3 py-2 rounded-2xl flex flex-col items-center">
                  <div className="flex items-center gap-1 text-secondary font-bold text-sm">
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Ekdum Asli
                  </div>
                  <span className="text-[9px] font-bold tracking-widest text-secondary mt-1">ON-CHAIN VERIFIED</span>
                </div>
              </div>
              <div className="flex items-center gap-6 pt-5 border-t border-outline-variant/20">
                <div>
                  <div className="flex items-center gap-1 font-display-bold text-xl text-on-surface">
                    4.8 <span className="material-symbols-outlined text-[#dcc66e] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="text-xs text-on-surface-variant font-bold mt-1">2k+ Reviews</p>
                </div>
                <div className="w-px h-10 bg-outline-variant/30"></div>
                <div>
                  <div className="font-display-bold text-xl text-on-surface">5+ Years</div>
                  <p className="text-xs text-on-surface-variant font-bold mt-1">Selling Locally</p>
                </div>
              </div>
            </div>

            {/* Group Deal Card */}
            <div className="bg-[#fff8f5] border border-primary-container/30 rounded-3xl p-6 mb-8 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-5">
                <span className="material-symbols-outlined text-[120px]">group</span>
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-primary font-bold text-lg">
                    <span className="material-symbols-outlined">group</span>
                    Society Group Deal
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold tracking-widest text-error uppercase mb-1">Ends In</span>
                    <div className="flex items-center gap-1 text-error font-display-bold text-xl">
                      <span className="material-symbols-outlined text-[20px]">schedule</span>
                      02:14:59
                    </div>
                  </div>
                </div>
                
                <p className="font-medium text-sm text-on-surface-variant mb-6 w-3/4">
                  5 aur log chahiye <span className="font-bold text-primary">₹850</span> ka price unlock karne ke liye!
                </p>

                <div className="mb-6">
                  <div className="flex justify-between text-xs font-bold text-primary mb-2">
                    <span>15 Joined</span>
                    <span className="text-on-surface-variant">Target: 20</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-3 rounded-full overflow-hidden">
                    <div className="bg-primary-container h-full rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/100?img=1" className="w-8 h-8 rounded-full border-2 border-white" alt="user" />
                    <img src="https://i.pravatar.cc/100?img=2" className="w-8 h-8 rounded-full border-2 border-white" alt="user" />
                    <img src="https://i.pravatar.cc/100?img=3" className="w-8 h-8 rounded-full border-2 border-white" alt="user" />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-high text-[10px] font-bold flex items-center justify-center text-on-surface-variant">
                      +12
                    </div>
                  </div>
                  <p className="text-xs font-medium text-on-surface-variant">
                    Priya, Amit aur 13 padosi jud chuke hain.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => {
                  addToCart({
                    id: "ratnagiri-alphonso-1",
                    name: "Premium Ratnagiri Alphonso Mangoes",
                    price: 1200,
                    qty: 1,
                    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1000&q=80",
                    seller: "Ramesh Farms"
                  });
                }}
                className="flex-1 bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors py-4 rounded-[20px] flex flex-col items-center justify-center font-bold"
              >
                <span className="text-lg">Seedha Kharidein</span>
                <span className="text-xs text-on-surface-variant font-medium mt-1">(Pay ₹1200 via UPI)</span>
              </button>
              <button 
                onClick={() => {
                  addToCart({
                    id: "ratnagiri-alphonso-deal",
                    name: "Group Deal: Alphonso Mangoes",
                    price: 850,
                    qty: 1,
                    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1000&q=80",
                    seller: "Ramesh Farms"
                  });
                }}
                className="flex-[1.5] bg-primary text-white hover:bg-primary/90 transition-colors py-4 rounded-[20px] flex flex-col items-center justify-center font-bold shadow-lg shadow-primary/30"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">group_add</span>
                  <span className="text-lg">Group Deal Mein Judein</span>
                </div>
                <span className="text-xs text-white/80 font-medium mt-1">(Lock price at ₹850)</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-4 border-t border-b border-outline-variant/20 text-sm font-bold text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                Free Society Delivery
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">assignment_return</span>
                No-questions Return
              </div>
            </div>

          </div>
        </div>

        {/* Product Details Section */}
        <div className="mt-8">
          <h2 className="font-display-bold text-2xl text-on-surface mb-6">Product Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Highlights */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-display-bold text-xl mb-6">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                Highlights
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-on-surface font-medium">100% Carbide Free ripening process.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-on-surface font-medium">Grade A export quality, minimum 250g per piece.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-on-surface font-medium">Sourced directly from GI-tagged farms in Ratnagiri.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-on-surface font-medium">Packed in sustainable, ventilated boxes.</span>
                </li>
              </ul>
            </div>

            {/* Packaging & Delivery */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-primary font-display-bold text-xl mb-4">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                  Packaging & Delivery
                </div>
                <p className="text-on-surface font-medium mb-8">
                  Aapka order surakshit packaging mein aayega. Hum plastic ka istemal nahi karte.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
                  <span className="text-sm font-bold text-on-surface-variant">Expected Delivery</span>
                  <span className="font-display-bold text-lg text-on-surface">Tomorrow, 9 AM - 11 AM</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
                  <span className="text-sm font-bold text-on-surface-variant">Packaging Type</span>
                  <span className="font-display-bold text-lg text-on-surface">Eco-friendly Cardboard</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
