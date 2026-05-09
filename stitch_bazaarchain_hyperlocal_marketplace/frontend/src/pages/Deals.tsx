import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import TopNavBar from '../components/TopNavBar';

export default function Deals() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  return (
    <div className="antialiased min-h-screen flex flex-col pt-24 bg-background text-on-background">
      <TopNavBar />

      <main className="flex-grow max-w-7xl mx-auto w-full px-container-padding flex gap-8">
        {/* Left Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 flex-shrink-0 sticky top-28 h-[calc(100vh-8rem)]">
          <div className="bg-surface-container-low/50 dark:bg-inverse-surface rounded-[2rem] p-6 flex flex-col h-full shadow-sm border border-outline-variant/20">
            <div className="mb-6">
              <h2 className="font-display-bold text-headline-lg-mobile text-primary mb-1 leading-tight">Bazaar Categories</h2>
              <p className="text-label-sm text-on-surface-variant mt-1">Shop Local, Grow Local</p>
            </div>
            <nav className="flex flex-col py-4 space-y-1 flex-grow overflow-y-auto hide-scrollbar">
              <a className="text-on-surface-variant hover:bg-surface-container-high rounded-xl mx-1 my-1 flex items-center gap-4 p-3 transition-all" href="#">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="font-title-md text-sm">Groceries</span>
              </a>
              <a className="text-on-surface-variant hover:bg-surface-container-high rounded-xl mx-1 my-1 flex items-center gap-4 p-3 transition-all" href="#">
                <span className="material-symbols-outlined">checkroom</span>
                <span className="font-title-md text-sm">Fashion</span>
              </a>
              <a className="text-on-surface-variant hover:bg-surface-container-high rounded-xl mx-1 my-1 flex items-center gap-4 p-3 transition-all" href="#">
                <span className="material-symbols-outlined">devices</span>
                <span className="font-title-md text-sm">Electronics</span>
              </a>
              <a className="text-on-surface-variant hover:bg-surface-container-high rounded-xl mx-1 my-1 flex items-center gap-4 p-3 transition-all" href="#">
                <span className="material-symbols-outlined">home_app_logo</span>
                <span className="font-title-md text-sm">Home Decor</span>
              </a>
              <a className="text-on-surface-variant hover:bg-surface-container-high rounded-xl mx-1 my-1 flex items-center gap-4 p-3 transition-all" href="#">
                <span className="material-symbols-outlined">precision_manufacturing</span>
                <span className="font-title-md text-sm">Handicrafts</span>
              </a>
              <a className="text-on-surface-variant hover:bg-surface-container-high rounded-xl mx-1 my-1 flex items-center gap-4 p-3 transition-all" href="#">
                <span className="material-symbols-outlined">stars</span>
                <span className="font-title-md text-sm">Local Hero</span>
              </a>
            </nav>
            <div className="mt-auto pt-6 flex flex-col gap-4">
              <button 
                onClick={() => navigate('/product')}
                className="w-full bg-primary-container text-white py-3 rounded-full font-title-md shadow-md hover:opacity-90 transition-all font-bold"
              >
                Buy
              </button>
              <div className="flex justify-around px-2 text-on-surface-variant">
                <a className="hover:text-primary flex flex-col items-center gap-1 transition-colors" href="#">
                  <span className="material-symbols-outlined text-[20px]">help</span>
                  <span className="text-[10px] font-bold">Help Center</span>
                </a>
                <a className="hover:text-primary flex flex-col items-center gap-1 transition-colors" href="#">
                  <span className="material-symbols-outlined text-[20px]">settings</span>
                  <span className="text-[10px] font-bold">Settings</span>
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Area */}
        <section className="flex-grow flex flex-col w-full max-w-2xl mx-auto">
          <div className="mb-6">
            <h1 className="font-display-bold text-display-bold text-on-surface">Mohalla Deals (452001)</h1>
            <p className="font-body-md text-on-surface-variant mt-1 font-medium">Team up with your neighbors to unlock wholesale prices.</p>
          </div>

          {/* Featured Deal Card */}
          <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/20 flex flex-col md:flex-row mb-6">
            <div className="relative w-full md:w-5/12 h-48 md:h-auto bg-surface-container">
              <img src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=600&q=80" alt="Mangoes" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                Ekdum Asli
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-lg text-[24px] text-on-surface leading-tight font-bold">Ratnagiri<br/>Alphonso<br/>Peti (1 Dozen)</h3>
                <div className="bg-error/10 text-error px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  04:12:59
                </div>
              </div>
              <p className="font-body-md text-sm text-on-surface-variant mb-4">Direct from farm. Premium export quality mangoes.</p>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display-bold text-[32px] text-primary leading-none">₹850</span>
                <span className="text-on-surface-variant line-through text-lg mt-1 font-medium">₹1200</span>
                <span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-sm text-[10px] font-bold tracking-widest mt-1">30% OFF</span>
              </div>

              <div className="mb-6 mt-auto">
                <div className="flex justify-between text-xs font-bold text-on-surface-variant mb-2">
                  <span>15/20 Joined</span>
                  <span>5 more needed for deal</span>
                </div>
                <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              
              <Link to="/product" className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-title-md font-bold flex justify-center items-center gap-2 hover:bg-primary/90 transition-colors shadow-md">
                Join Group
                <span className="material-symbols-outlined text-[20px]">person_add</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-24">
            {/* Deal Card 1 */}
            <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/20 flex flex-col">
              <div className="relative h-40 w-full bg-surface-container">
                <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80" alt="Spices" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-tertiary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                  Local Hero
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-title-md text-lg text-on-surface mb-1 font-bold leading-tight">Authentic Spice Box set (500g)</h3>
                <p className="font-body-md text-xs text-on-surface-variant mb-4">Freshly ground by Sharma Ji...</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-display-bold text-xl text-primary">₹320</span>
                  <span className="text-on-surface-variant line-through text-sm font-medium">₹450</span>
                </div>

                <div className="mb-5 mt-auto">
                  <div className="flex justify-between text-[11px] font-bold text-secondary mb-2">
                    <span>8/10 Joined</span>
                    <span className="flex items-center gap-0.5 text-error"><span className="material-symbols-outlined text-[12px]">schedule</span> 01:45:00</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    addToCart({
                      id: "authentic-spice-box",
                      name: "Authentic Spice Box set (500g)",
                      price: 320,
                      qty: 1,
                      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
                      seller: "Sharma Ji Spices"
                    });
                  }}
                  className="w-full border-2 border-primary text-primary bg-surface-container-lowest py-2.5 rounded-xl font-title-md text-sm font-bold hover:bg-primary/5 transition-colors"
                >
                  Join Group
                </button>
              </div>
            </div>

            {/* Deal Card 2 */}
            <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/20 flex flex-col">
              <div className="relative h-40 w-full bg-surface-container">
                <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80" alt="Bakery" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-title-md text-lg text-on-surface mb-1 font-bold leading-tight">Morning Bakery Bundle</h3>
                <p className="font-body-md text-xs text-on-surface-variant mb-4 line-clamp-1">Sourdough & 4 Croissants fro...</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-display-bold text-xl text-primary">₹250</span>
                  <span className="text-on-surface-variant line-through text-sm font-medium">₹380</span>
                </div>

                <div className="mb-5 mt-auto">
                  <div className="flex justify-between text-[11px] font-bold text-on-surface-variant mb-2">
                    <span className="text-on-surface">2/5 Joined</span>
                    <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">schedule</span> 12:00:00</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    addToCart({
                      id: "morning-bakery-bundle",
                      name: "Morning Bakery Bundle",
                      price: 250,
                      qty: 1,
                      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
                      seller: "Fresh Bakes"
                    });
                  }}
                  className="w-full border-2 border-primary text-primary bg-surface-container-lowest py-2.5 rounded-xl font-title-md text-sm font-bold hover:bg-primary/5 transition-colors"
                >
                  Join Group
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="hidden xl:flex flex-col w-80 flex-shrink-0 sticky top-28 h-[calc(100vh-8rem)]">
          <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm border border-outline-variant/20 flex flex-col overflow-hidden">
            <div className="mb-4">
              <h2 className="font-display-bold text-title-md text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
                Local Pickup Points
              </h2>
              <p className="text-xs text-on-surface-variant font-bold mt-1">See where your neighbors are grouping orders.</p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden h-80 w-full mb-4 border border-outline-variant/20">
              {/* Map Placeholder */}
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80" alt="Map" className="w-full h-full object-cover opacity-60 grayscale" />
              
              {/* Map Pins */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="material-symbols-outlined text-primary text-3xl drop-shadow-md" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
              </div>
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
                <span className="material-symbols-outlined text-primary text-3xl drop-shadow-md" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
              </div>
              <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2">
                <span className="material-symbols-outlined text-secondary text-3xl drop-shadow-md">location_on</span>
              </div>

              {/* Popup Card inside map */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-outline-variant/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed flex items-center justify-center font-bold text-xs">
                    SM
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface leading-tight">Sharma General Store</h4>
                    <p className="text-[10px] text-on-surface-variant">3 Active Groups • 200m away</p>
                  </div>
                </div>
                <button className="w-full bg-primary-container/10 text-primary py-2 rounded-xl text-xs font-bold hover:bg-primary-container/20 transition-colors">
                  View Deals Here
                </button>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-[#e1e8fd] w-full rounded-t-[40px] mt-auto border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center py-10 px-container-padding max-w-7xl mx-auto gap-stack-gap">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-display-bold text-title-md text-primary">BazaarChain</span>
          <p className="text-on-surface-variant text-xs font-bold mt-1">© 2024 BazaarChain - Ekdum Asli Hyperlocal Commerce</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-all text-sm font-medium" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-all text-sm font-medium" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-all text-sm font-medium" href="#">Partner with Us</a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline transition-all text-sm font-medium" href="#">Contact Support</a>
        </div>
      </footer>
    </div>
  );
}
