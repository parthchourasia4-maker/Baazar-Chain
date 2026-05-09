import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import TopNavBar from '../components/TopNavBar';

export default function SellerDashboard() {
  return (
    <div className="antialiased min-h-screen flex flex-col pt-24 bg-background text-on-background">
      <TopNavBar />

      <main className="flex-grow max-w-7xl mx-auto w-full px-container-padding flex gap-8">
        {/* Left Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 flex-shrink-0 sticky top-28 h-[calc(100vh-8rem)]">
          {/* Reputation Tier Card */}
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
            <p className="text-sm text-[#534600] leading-snug">
              Top 5% of Local Heroes in your area.
            </p>
          </div>

          {/* Navigation Menu */}
          <div className="bg-surface-container-low rounded-3xl p-4 shadow-sm flex flex-col gap-2">
            <a href="#" className="flex items-center gap-4 bg-secondary-container text-on-secondary-container px-4 py-3 rounded-2xl font-bold transition-all">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>inventory_2</span>
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
            <div className="h-px w-full bg-outline-variant/30 my-2"></div>
            <a href="#" className="flex items-center gap-4 text-on-surface-variant hover:bg-surface-container-high px-4 py-3 rounded-2xl transition-all">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-title-md text-sm">Store Settings</span>
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
            <button className="bg-primary-container text-white px-6 py-3 rounded-full font-title-md text-sm font-bold flex items-center gap-2 hover:bg-primary transition-colors shadow-md shadow-primary-container/30">
              <span className="material-symbols-outlined text-[20px]">add</span>
              Naya Item (Add New)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Listing Card 1 */}
            <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/20 flex flex-col">
              <div className="relative h-48 w-full bg-surface-container">
                <img src="https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=800&q=80" alt="Mangoes" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                  <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Ekdum Asli
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline-lg-mobile text-[22px] text-on-surface mb-2 leading-tight">Alphonso Mangoes (1 Dozen)</h3>
                <p className="font-body-md text-sm text-on-surface-variant mb-6 flex-grow">Direct from Ratnagiri farms. Export quality.</p>
                <div className="flex justify-between items-end mt-auto">
                  <div>
                    <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider mb-1">Current Price</p>
                    <p className="font-display-bold text-headline-lg text-primary">₹1,200</p>
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

            {/* Listing Card 2 */}
            <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/20 flex flex-col">
              <div className="relative h-48 w-full bg-surface-container">
                <img src="https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?auto=format&fit=crop&w=800&q=80" alt="Brass Diyas" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline-lg-mobile text-[22px] text-on-surface mb-2 leading-tight">Handcrafted Brass Diyas</h3>
                <p className="font-body-md text-sm text-on-surface-variant mb-6 flex-grow">Set of 4. Traditional Moradabad design.</p>
                <div className="flex justify-between items-end mt-auto">
                  <div>
                    <p className="text-xs text-on-surface-variant font-bold uppercase tracking-wider mb-1">Current Price</p>
                    <p className="font-display-bold text-headline-lg text-primary">₹850</p>
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

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-high w-full rounded-t-[40px] mt-12 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center py-8 px-container-padding max-w-7xl mx-auto gap-stack-gap">
        <div className="flex flex-col items-center md:items-start gap-1 md:flex-row md:items-center">
          <span className="font-display-bold text-title-md text-primary mr-2">BazaarChain</span>
          <p className="text-on-surface-variant text-body-md text-sm">© 2024 BazaarChain - Ekdum Asli Hyperlocal Commerce</p>
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
