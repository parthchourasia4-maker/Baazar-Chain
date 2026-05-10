import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopNavBar from '../components/TopNavBar';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Pincode data with coordinates
const PINCODE_DATA: Record<string, { name: string; lat: number; lng: number; sellers: number; trending: string[] }> = {
  '400001': { name: 'Fort, Mumbai', lat: 18.9388, lng: 72.8354, sellers: 42, trending: ['Spices', 'Textiles', 'Handicrafts'] },
  '400050': { name: 'Bandra West, Mumbai', lat: 19.0596, lng: 72.8295, sellers: 38, trending: ['Organic Foods', 'Fashion', 'Home Decor'] },
  '110001': { name: 'Connaught Place, Delhi', lat: 28.6315, lng: 77.2167, sellers: 55, trending: ['Electronics', 'Street Food', 'Books'] },
  '560001': { name: 'MG Road, Bengaluru', lat: 12.9716, lng: 77.5946, sellers: 48, trending: ['Silk', 'Flowers', 'Coffee'] },
  '700001': { name: 'BBD Bagh, Kolkata', lat: 22.5726, lng: 88.3639, sellers: 35, trending: ['Sweets', 'Sarees', 'Pottery'] },
  '500001': { name: 'Charminar, Hyderabad', lat: 17.3616, lng: 78.4747, sellers: 40, trending: ['Pearls', 'Bangles', 'Biryani Spices'] },
  '600001': { name: 'George Town, Chennai', lat: 13.0827, lng: 80.2707, sellers: 33, trending: ['Silk', 'Jewelry', 'Groceries'] },
  '302001': { name: 'Pink City, Jaipur', lat: 26.9124, lng: 75.7873, sellers: 60, trending: ['Gems', 'Block Print', 'Leather'] },
  '452001': { name: 'Old City, Indore', lat: 22.7196, lng: 75.8577, sellers: 29, trending: ['Namkeen', 'Poha', 'Handicrafts'] },
  '380001': { name: 'Lal Darwaja, Ahmedabad', lat: 23.0225, lng: 72.5714, sellers: 44, trending: ['Textiles', 'Kites', 'Snacks'] },
};

export default function Home() {
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);

  // Initialize the Leaflet map
  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return;

    const map = L.map(mapRef.current, {
      center: [20.5937, 78.9629],
      zoom: 5,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    leafletMap.current = map;

    // Add markers for all known pincodes
    Object.entries(PINCODE_DATA).forEach(([code, data]) => {
      const marker = L.circleMarker([data.lat, data.lng], {
        radius: 7,
        fillColor: '#f97316',
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.85,
      }).addTo(map);
      marker.bindPopup(`<b>${data.name}</b><br/>PIN: ${code}<br/>${data.sellers} sellers active`);
    });

    // Listen to saved location changes
    const checkLocation = () => {
      const saved = localStorage.getItem('bazaarchain_location');
      if (saved) {
        try {
          const loc = JSON.parse(saved);
          const data = PINCODE_DATA[loc.pincode];
          if (data && leafletMap.current) {
            leafletMap.current.flyTo([data.lat, data.lng], 13, { duration: 1.5 });
          }
        } catch {}
      }
    };
    checkLocation();
    window.addEventListener('storage', checkLocation);

    return () => {
      window.removeEventListener('storage', checkLocation);
      map.remove();
      leafletMap.current = null;
    };
  }, []);

  return (
    <div className="antialiased min-h-screen flex flex-col pt-24 bg-background text-on-background">
      <TopNavBar />

      <main className="flex-grow max-w-[96rem] mx-auto w-full px-4 lg:px-8 grid grid-cols-1 xl:grid-cols-[1fr_22rem] gap-6">

        {/* ========== CENTER FEED: Video Cards ========== */}
        <section className="flex-grow flex flex-col items-center w-full max-w-xl mx-auto pb-24 order-1">

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
                onClick={() => navigate('/product')}
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
                onClick={() => navigate('/product')}
                className="w-full bg-primary-container text-white py-4 rounded-2xl font-title-md shadow-[0_10px_20px_rgba(249,115,22,0.4)] scale-95 active:scale-90 transition-transform hover:bg-primary"
              >
                Buy
              </button>
            </div>
          </div>
        </section>

        {/* ========== RIGHT SIDEBAR: Map + Trending ========== */}
        <aside className="hidden xl:flex flex-col w-full flex-shrink-0 sticky top-28 h-[calc(100vh-8rem)] gap-5 order-2">

          {/* Interactive Map */}
          <div className="flex-1 bg-surface-container-lowest rounded-3xl shadow-lg border border-outline-variant/20 overflow-hidden flex flex-col min-h-0">
            <div className="flex items-center justify-between px-5 py-3 border-b border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">map</span>
                <h2 className="font-display-bold text-title-md text-on-surface">Live Bazaar Map</h2>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-label-sm text-on-surface-variant">{Object.keys(PINCODE_DATA).length} zones</span>
              </div>
            </div>
            <div ref={mapRef} className="flex-1 min-h-[280px] z-0" />
          </div>

          {/* Trending Near You */}
          <div className="bg-surface-container-lowest rounded-3xl p-5 shadow-lg border border-outline-variant/20">
            <h3 className="font-display-bold text-title-md text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">trending_up</span>
              Trending Near You
            </h3>
            <div className="flex flex-col gap-3">
              {/* Trending Item 1 */}
              <div className="flex gap-3 items-center p-3 rounded-2xl hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30">
                <img alt="Spices" className="w-14 h-14 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjruOSyGIO7ipxJOizlsLC-9IQ9xtfB21sBRU4pIISTNBnyEXeylxWF6OgtBuB4tEuW8is32w3Jcda32R3LPf66oMX6QZKRuNNal7i9SEC69rob5k_EcWY9XMuRbw9M4Cgq-vYQ-CZUT-3LvqpjIFKMJhhkMnE-uAYqX7oskn9orQ6y6mpN_gG85o2DdmaN-IoSad7hKHzfApJlO-tEwfMgviC_pWrryokKmaHMg0MTUoJZIGDjf6wOG_JaoYIcToblMqCloLJTod9" />
                <div className="flex-grow min-w-0">
                  <h4 className="font-title-md text-body-md font-semibold text-on-surface line-clamp-1">Premium Spices Pack</h4>
                  <p className="text-label-sm text-on-surface-variant">2.1 km away</p>
                </div>
                <span className="text-primary font-bold text-body-md shrink-0">₹320</span>
              </div>
              {/* Trending Item 2 */}
              <div className="flex gap-3 items-center p-3 rounded-2xl hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30">
                <img alt="Fresh Flowers" className="w-14 h-14 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOAPtxt4qEpVwMwUH9lfTB09c-mgS3qSFOFNeWz8pgiRWEpwgvHfcyONMjg5L7kf8IV5yWfppNX54nzpBGHZ5RWLWqqDK3ACH_Wfqjg0g1qxGA09lJNf_Icj_UGWncjQnW_s27wUjho3YV-wC3jyxFJLkF8Jfe9mvLQbMAdqx-W-3gqYwVsniQ-SobjIXcjBK2xhTkp9P9KdDKVeiYJLuJ0k1gXAkxgTqiAPLblE1J3Bt-KylbMRpUUDuGrTlJv2sUJQRlzbybtWn2" />
                <div className="flex-grow min-w-0">
                  <h4 className="font-title-md text-body-md font-semibold text-on-surface line-clamp-1">Fresh Marigolds</h4>
                  <p className="text-label-sm text-on-surface-variant">0.8 km away</p>
                </div>
                <span className="text-primary font-bold text-body-md shrink-0">₹150</span>
              </div>
              {/* Trending Item 3 */}
              <div className="flex gap-3 items-center p-3 rounded-2xl hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30">
                <div className="w-14 h-14 rounded-xl bg-primary-container/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[28px]">local_grocery_store</span>
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="font-title-md text-body-md font-semibold text-on-surface line-clamp-1">Organic Vegetables</h4>
                  <p className="text-label-sm text-on-surface-variant">1.5 km away</p>
                </div>
                <span className="text-primary font-bold text-body-md shrink-0">₹250</span>
              </div>
            </div>
          </div>

          {/* Categories Quick Nav */}
          <div className="bg-surface-container-lowest rounded-3xl p-5 shadow-lg border border-outline-variant/20">
            <h3 className="font-display-bold text-title-md text-on-surface mb-3">Categories</h3>
            <nav className="grid grid-cols-3 gap-2">
              {[
                { icon: 'local_grocery_store', label: 'Groceries' },
                { icon: 'checkroom', label: 'Fashion' },
                { icon: 'devices', label: 'Electronics' },
                { icon: 'home_app_logo', label: 'Decor' },
                { icon: 'precision_manufacturing', label: 'Crafts' },
                { icon: 'stars', label: 'Local Hero' },
              ].map((cat) => (
                <a
                  key={cat.label}
                  href="#"
                  className="flex flex-col items-center gap-1 p-2.5 rounded-xl hover:bg-surface-container-high transition-colors text-on-surface-variant hover:text-primary"
                >
                  <span className="material-symbols-outlined text-[22px]">{cat.icon}</span>
                  <span className="text-label-sm font-medium text-center leading-tight">{cat.label}</span>
                </a>
              ))}
            </nav>
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
