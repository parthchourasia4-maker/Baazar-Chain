import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="antialiased min-h-screen flex flex-col pt-24 bg-background text-on-background">
      <TopNavBar />


      <main className="flex-grow max-w-[90rem] mx-auto w-full px-container-padding grid grid-cols-1 lg:grid-cols-[16rem_1fr] xl:grid-cols-[16rem_1fr_20rem] gap-8">
        {/* SideNavBar (Left) */}
        <aside className="hidden lg:flex flex-col w-64 flex-shrink-0 sticky top-28 h-[calc(100vh-8rem)]">
          <div className="bg-surface-container-low dark:bg-inverse-surface bg-opacity-50 backdrop-blur-md shadow-xl rounded-3xl p-6 flex flex-col h-full">
            <div className="mb-8">
              <h2 className="font-display-bold text-headline-lg text-primary mb-1">Bazaar Categories</h2>
              <p className="text-label-sm text-on-surface-variant">Shop Local, Grow Local</p>
            </div>
            <nav className="flex flex-col py-6 space-y-2 flex-grow overflow-y-auto hide-scrollbar">
              <a className="bg-secondary-container text-on-secondary-container rounded-xl font-bold mx-2 my-1 flex items-center gap-3 p-3 hover:translate-x-1 transition-transform duration-200" href="#">
                <span className="material-symbols-outlined">local_grocery_store</span>
                <span className="font-title-md text-title-md">Groceries</span>
              </a>
              <a className="text-on-surface-variant hover:bg-surface-container-high rounded-xl mx-2 my-1 flex items-center gap-3 p-3 hover:translate-x-1 transition-transform duration-200" href="#">
                <span className="material-symbols-outlined">checkroom</span>
                <span className="font-title-md text-title-md">Fashion</span>
              </a>
              <a className="text-on-surface-variant hover:bg-surface-container-high rounded-xl mx-2 my-1 flex items-center gap-3 p-3 hover:translate-x-1 transition-transform duration-200" href="#">
                <span className="material-symbols-outlined">devices</span>
                <span className="font-title-md text-title-md">Electronics</span>
              </a>
              <a className="text-on-surface-variant hover:bg-surface-container-high rounded-xl mx-2 my-1 flex items-center gap-3 p-3 hover:translate-x-1 transition-transform duration-200" href="#">
                <span className="material-symbols-outlined">home_app_logo</span>
                <span className="font-title-md text-title-md">Home Decor</span>
              </a>
              <a className="text-on-surface-variant hover:bg-surface-container-high rounded-xl mx-2 my-1 flex items-center gap-3 p-3 hover:translate-x-1 transition-transform duration-200" href="#">
                <span className="material-symbols-outlined">precision_manufacturing</span>
                <span className="font-title-md text-title-md">Handicrafts</span>
              </a>
              <a className="text-on-surface-variant hover:bg-surface-container-high rounded-xl mx-2 my-1 flex items-center gap-3 p-3 hover:translate-x-1 transition-transform duration-200" href="#">
                <span className="material-symbols-outlined">stars</span>
                <span className="font-title-md text-title-md">Local Hero</span>
              </a>
            </nav>
            <div className="mt-auto pt-6 border-t border-outline-variant/30 flex flex-col gap-2">
              <button 
                onClick={() => navigate('/product')}
                className="w-full bg-primary-container text-white py-3 rounded-xl font-title-md text-title-md scale-95 active:scale-90 transition-transform shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:opacity-90"
              >
                Buy
              </button>
              <div className="flex justify-between mt-4 px-2">
                <a className="text-on-surface-variant hover:text-primary flex flex-col items-center gap-1 hover:translate-x-1 transition-transform duration-200" href="#">
                  <span className="material-symbols-outlined text-sm">help</span>
                </a>
                <a className="text-on-surface-variant hover:text-primary flex flex-col items-center gap-1 hover:translate-x-1 transition-transform duration-200" href="#">
                  <span className="material-symbols-outlined text-sm">settings</span>
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Feed (Center) */}
        <section className="flex-grow flex flex-col items-center w-full max-w-2xl mx-auto pb-24">
          {/* Video Card 1 */}
          <div className="w-full aspect-[9/16] bg-surface-container-high rounded-[32px] overflow-hidden relative shadow-[0_10px_30px_rgba(249,115,22,0.15)] mb-8 snap-center">
            <img alt="Fresh mangoes at market" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDSMucUrp2IZfBkbkMOVmhMRhRrh6JnJujZd-LTpE366fb74nyLClzgyZHiZKLX9HQAeRRlEPxfrLs6TGEPE2eqE926q39D2JxKi595Cgy87LX21yljxh2x2e8NZEIdG7tLW_35mqZNQroDO7fhNsXCq5xtzj5nW5HWoMkeFnHU1FmLOvkKYJ0jZkvIGsxxmkAnfDSqfYK_vpPGr8xVPppMLsKI9DMD9IA0AYdeZSFXvtShCU4EHfmrrU3OIVbbidEYycTg_S0XFWz" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10 pointer-events-none">
              <div className="bg-secondary text-white px-3 py-1 rounded-full text-label-sm font-bold flex items-center gap-1 backdrop-blur-md bg-opacity-90 shadow-md">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Ekdum Asli
              </div>
              <div className="bg-black/40 backdrop-blur-md text-white px-3 py-1 rounded-full text-label-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">visibility</span>
                1.2k viewing
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-4">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-white font-headline-lg-mobile mb-1 drop-shadow-md">Ratnagiri Alphonso</h3>
                  <div className="flex items-center gap-2 text-white/90 text-body-md mb-2">
                    <span className="material-symbols-outlined text-[18px]">storefront</span>
                    <span>Raju's Fresh Produce</span>
                    <span className="text-secondary-fixed text-sm flex items-center gap-0.5"><span className="material-symbols-outlined text-[14px]">star</span>4.8</span>
                  </div>
                  <p className="text-white font-display-bold text-title-md">₹450 <span className="text-white/70 text-body-md line-through font-normal">₹600</span> <span className="text-label-sm text-secondary-fixed bg-secondary-container/20 px-2 py-0.5 rounded ml-2">25% OFF</span></p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <button className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition-colors">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  </button>
                  <span className="text-white text-label-sm drop-shadow-md">842</span>
                  <button className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                  <span className="text-white text-label-sm drop-shadow-md">Share</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  navigate('/product');
                }}
                className="w-full bg-primary-container text-white py-4 rounded-2xl font-title-md shadow-[0_10px_20px_rgba(249,115,22,0.4)] scale-95 active:scale-90 transition-transform hover:bg-primary"
              >
                Buy
              </button>
            </div>
          </div>

          {/* Video Card 2 */}
          <div className="w-full aspect-[9/16] bg-surface-container-high rounded-[32px] overflow-hidden relative shadow-[0_10px_30px_rgba(249,115,22,0.15)] mb-8 snap-center">
            <img alt="Handcrafted pottery" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBshIwbtoPNMErljW08_q1_uGAaVw2H9FdHsbwu7Y-5giIUIZrUGOhcm3H3yxLgVaUII9yaPbjs0MJw_1CYpTbgbO1yiJyNTaO8ATHlua3M0CHViU05cXg3euVdMyMYpe8Li1VcXw4bM5Wc3_gGcmbNPc42MdShjYpXxNkdpBV2jVB47Ad2sKCGNo_remQOqietLsWurBE8-FG2rhlQpCDqwbGn99hKLQ8VQSjsVda1qr-bqWt0wfZr6ybigZuxMhpOtHjaMmIWEKuB" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10 pointer-events-none">
              <div className="bg-tertiary text-white px-3 py-1 rounded-full text-label-sm font-bold flex items-center gap-1 backdrop-blur-md bg-opacity-90 shadow-md">
                <span className="material-symbols-outlined text-[16px]">stars</span>
                Local Hero
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-4">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-white font-headline-lg-mobile mb-1 drop-shadow-md">Handpainted Ceramic Bowls</h3>
                  <div className="flex items-center gap-2 text-white/90 text-body-md mb-2">
                    <span className="material-symbols-outlined text-[18px]">storefront</span>
                    <span>Aarti Crafts</span>
                    <span className="text-secondary-fixed text-sm flex items-center gap-0.5"><span className="material-symbols-outlined text-[14px]">star</span>4.9</span>
                  </div>
                  <p className="text-white font-display-bold text-title-md">₹1,200 <span className="text-label-sm text-secondary-fixed bg-secondary-container/20 px-2 py-0.5 rounded ml-2">Set of 4</span></p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <button className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                  <span className="text-white text-label-sm drop-shadow-md">456</span>
                  <button className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/30 transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                  <span className="text-white text-label-sm drop-shadow-md">Share</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  navigate('/product');
                }}
                className="w-full bg-primary-container text-white py-4 rounded-2xl font-title-md shadow-[0_10px_20px_rgba(249,115,22,0.4)] scale-95 active:scale-90 transition-transform hover:bg-primary"
              >
                Buy
              </button>
            </div>
          </div>
        </section>

        {/* Right Sidebar (Live in Area) */}
        <aside className="hidden xl:flex flex-col w-80 flex-shrink-0 sticky top-28 h-[calc(100vh-8rem)]">
          <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-lg border border-outline-variant/20 flex flex-col h-full overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display-bold text-title-md text-on-surface">Live in Your Area</h2>
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-container"></span>
              </span>
            </div>
            {/* Map Widget Placeholder */}
            <div className="w-full h-48 bg-surface-container-high rounded-2xl mb-6 relative overflow-hidden group border border-outline-variant/30">
              <img alt="Map view" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1_yal7Uh46ttFz-nkO4Hra0E3rKBjj8SS-ekIrON57HXpSlr9GIL26bioJJrLKH-b_ByxbV3HnwnF6e75o2EFm6hYT1yjy6u7gm0Wkv8BJmRvE8E1rMtrUMCIOTjFs-7WskxrrAj1DwtoNtZxx3_FYwlgNq4W52UYE704UbjCq2mOTHxDC1aaAmMzEYgaGUEBg_bvQHqLVx2aMuULq8Un3e4t1nlsbZeDIPHINEObRvEzvyn42Cn9XhGkvYjyaGkh5x7v6sT4h_do" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest/90 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-surface/90 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">group</span>
                    <span className="text-label-sm font-bold text-on-surface">5 Active Group Buys</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant text-[16px]">chevron_right</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 overflow-y-auto hide-scrollbar flex-grow pb-4">
              <h3 className="text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">Trending Near You</h3>
              {/* Trending Item 1 */}
              <div className="flex gap-3 items-center p-3 rounded-2xl hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30">
                <img alt="Spices" className="w-16 h-16 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjruOSyGIO7ipxJOizlsLC-9IQ9xtfB21sBRU4pIISTNBnyEXeylxWF6OgtBuB4tEuW8is32w3Jcda32R3LPf66oMX6QZKRuNNal7i9SEC69rob5k_EcWY9XMuRbw9M4Cgq-vYQ-CZUT-3LvqpjIFKMJhhkMnE-uAYqX7oskn9orQ6y6mpN_gG85o2DdmaN-IoSad7hKHzfApJlO-tEwfMgviC_pWrryokKmaHMg0MTUoJZIGDjf6wOG_JaoYIcToblMqCloLJTod9" />
                <div className="flex-grow">
                  <h4 className="font-title-md text-body-md font-semibold text-on-surface line-clamp-1">Premium Spices Pack</h4>
                  <p className="text-label-sm text-on-surface-variant">2.1 km away</p>
                </div>
                <div className="text-right">
                  <span className="text-primary font-bold text-body-md">₹320</span>
                </div>
              </div>
              {/* Trending Item 2 */}
              <div className="flex gap-3 items-center p-3 rounded-2xl hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30">
                <img alt="Fresh Flowers" className="w-16 h-16 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOAPtxt4qEpVwMwUH9lfTB09c-mgS3qSFOFNeWz8pgiRWEpwgvHfcyONMjg5L7kf8IV5yWfppNX54nzpBGHZ5RWLWqqDK3ACH_Wfqjg0g1qxGA09lJNf_Icj_UGWncjQnW_s27wUjho3YV-wC3jyxFJLkF8Jfe9mvLQbMAdqx-W-3gqYwVsniQ-SobjIXcjBK2xhTkp9P9KdDKVeiYJLuJ0k1gXAkxgTqiAPLblE1J3Bt-KylbMRpUUDuGrTlJv2sUJQRlzbybtWn2" />
                <div className="flex-grow">
                  <h4 className="font-title-md text-body-md font-semibold text-on-surface line-clamp-1">Fresh Marigolds</h4>
                  <p className="text-label-sm text-on-surface-variant">0.8 km away</p>
                </div>
                <div className="text-right">
                  <span className="text-primary font-bold text-body-md">₹150</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest dark:bg-inverse-surface w-full rounded-t-[40px] mt-section-margin border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center py-10 px-container-padding max-w-7xl mx-auto gap-stack-gap">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display-bold text-title-md text-primary">BazaarChain</span>
          <p className="text-on-surface-variant text-body-md">© 2024 BazaarChain - Ekdum Asli Hyperlocal Commerce</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="text-on-surface-variant hover:text-secondary hover:underline decoration-secondary transition-all font-body-md" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline decoration-secondary transition-all font-body-md" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline decoration-secondary transition-all font-body-md" href="#">Partner with Us</a>
          <a className="text-on-surface-variant hover:text-secondary hover:underline decoration-secondary transition-all font-body-md" href="#">Contact Support</a>
        </div>
      </footer>
    </div>
  );
}
