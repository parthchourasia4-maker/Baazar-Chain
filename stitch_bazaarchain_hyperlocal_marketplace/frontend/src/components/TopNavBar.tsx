import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Pincode data (shared across app)
const PINCODE_DATA: Record<string, { name: string; area: string }> = {
  '400001': { name: 'Fort', area: 'Mumbai' },
  '400050': { name: 'Bandra West', area: 'Mumbai' },
  '110001': { name: 'Connaught Place', area: 'Delhi' },
  '560001': { name: 'MG Road', area: 'Bengaluru' },
  '700001': { name: 'BBD Bagh', area: 'Kolkata' },
  '500001': { name: 'Charminar', area: 'Hyderabad' },
  '600001': { name: 'George Town', area: 'Chennai' },
  '302001': { name: 'Pink City', area: 'Jaipur' },
  '452001': { name: 'Old City', area: 'Indore' },
  '380001': { name: 'Lal Darwaja', area: 'Ahmedabad' },
};

export default function TopNavBar() {
  const { setIsCartOpen, cartCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Location picker state (Swiggy/Zomato style)
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [locationSearch, setLocationSearch] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<{ name: string; area: string; pincode: string } | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);

  const locationRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Check login state
  useEffect(() => {
    const token = localStorage.getItem('bazaarchain_token');
    const email = localStorage.getItem('user_email');
    if (token && email) {
      setIsLoggedIn(true);
      setUserEmail(email);
    } else {
      setIsLoggedIn(false);
      setUserEmail('');
    }
  }, [location]); // Re-check on every route change

  // Load saved location
  useEffect(() => {
    const saved = localStorage.getItem('bazaarchain_location');
    if (saved) {
      try {
        setSelectedLocation(JSON.parse(saved));
      } catch {}
    }
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) {
        setShowLocationPicker(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('bazaarchain_token');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_role');
    setIsLoggedIn(false);
    setUserEmail('');
    setShowUserMenu(false);
    navigate('/login');
  };

  const handleSelectLocation = (pincode: string, data: { name: string; area: string }) => {
    const loc = { name: data.name, area: data.area, pincode };
    setSelectedLocation(loc);
    localStorage.setItem('bazaarchain_location', JSON.stringify(loc));
    setShowLocationPicker(false);
    setLocationSearch('');
  };

  const handleDetectLocation = () => {
    setIsDetecting(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          // Find nearest pincode
          const { latitude, longitude } = pos.coords;
          const coords: Record<string, [number, number]> = {
            '400001': [18.9388, 72.8354],
            '400050': [19.0596, 72.8295],
            '110001': [28.6315, 77.2167],
            '560001': [12.9716, 77.5946],
            '700001': [22.5726, 88.3639],
            '500001': [17.3616, 78.4747],
            '600001': [13.0827, 80.2707],
            '302001': [26.9124, 75.7873],
            '452001': [22.7196, 75.8577],
            '380001': [23.0225, 72.5714],
          };
          let closest = '452001';
          let minDist = Infinity;
          Object.entries(coords).forEach(([code, [lat, lng]]) => {
            const dist = Math.sqrt((lat - latitude) ** 2 + (lng - longitude) ** 2);
            if (dist < minDist) {
              minDist = dist;
              closest = code;
            }
          });
          const data = PINCODE_DATA[closest];
          handleSelectLocation(closest, data);
          setIsDetecting(false);
        },
        () => {
          setIsDetecting(false);
        }
      );
    } else {
      setIsDetecting(false);
    }
  };

  // Filter pincodes based on search
  const filteredPincodes = Object.entries(PINCODE_DATA).filter(([code, data]) => {
    const q = locationSearch.toLowerCase();
    return code.includes(q) || data.name.toLowerCase().includes(q) || data.area.toLowerCase().includes(q);
  });

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? "text-primary dark:text-inverse-primary border-b-2 border-primary font-bold pb-1 font-body-md flex flex-col items-center"
      : "text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary transition-colors font-body-md flex flex-col items-center";
  };
  
  const getMobileLinkClass = (path: string) => {
    return location.pathname === path
      ? "text-primary font-bold text-lg"
      : "text-on-surface-variant hover:text-primary transition-colors text-lg font-medium";
  };

  // Get initials from email
  const getInitials = (email: string) => {
    const name = email.split('@')[0];
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 rounded-b-3xl bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm flex justify-between items-center h-20 px-4 md:px-container-padding max-w-7xl mx-auto left-0 right-0">
        <div className="flex items-center gap-2 md:gap-4 flex-1">
          <button 
            className="md:hidden p-2 text-on-surface-variant active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <Link to="/" className="font-display-bold text-headline-sm md:text-headline-lg font-bold text-primary dark:text-inverse-primary tracking-tighter">BazaarChain</Link>
          
          {/* ===== Swiggy/Zomato Style Location Picker ===== */}
          <div ref={locationRef} className="relative hidden md:block ml-2">
            <button 
              onClick={() => setShowLocationPicker(!showLocationPicker)}
              className="flex items-center gap-2 hover:bg-surface-container-high px-3 py-2 rounded-xl transition-colors group"
            >
              <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <div className="flex flex-col items-start">
                {selectedLocation ? (
                  <>
                    <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider leading-none">Delivery to</span>
                    <span className="text-body-md font-semibold text-on-surface leading-tight">{selectedLocation.name}, {selectedLocation.area}</span>
                  </>
                ) : (
                  <>
                    <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider leading-none">Select</span>
                    <span className="text-body-md font-semibold text-on-surface leading-tight">Your Location</span>
                  </>
                )}
              </div>
              <span className="material-symbols-outlined text-on-surface-variant text-[18px] group-hover:text-primary transition-colors">expand_more</span>
            </button>

            {/* Location Dropdown */}
            {showLocationPicker && (
              <div className="absolute top-full left-0 mt-2 w-[380px] bg-surface rounded-2xl shadow-2xl border border-outline-variant/30 z-[100] overflow-hidden animate-[fadeIn_0.2s_ease-out]">
                {/* Search */}
                <div className="p-4 border-b border-outline-variant/20">
                  <div className="flex items-center bg-surface-container-high rounded-xl border border-outline-variant/40 overflow-hidden focus-within:border-primary transition-colors">
                    <span className="material-symbols-outlined text-on-surface-variant/60 text-[18px] pl-3">search</span>
                    <input
                      type="text"
                      value={locationSearch}
                      onChange={(e) => setLocationSearch(e.target.value)}
                      placeholder="Search area, city or pincode..."
                      className="flex-1 bg-transparent px-3 py-3 text-body-md text-on-surface focus:outline-none placeholder:text-on-surface-variant/40"
                      autoFocus
                    />
                  </div>
                </div>

                {/* Detect Location Button */}
                <button
                  onClick={handleDetectLocation}
                  disabled={isDetecting}
                  className="w-full flex items-center gap-3 px-5 py-3.5 hover:bg-surface-container-low transition-colors border-b border-outline-variant/20 text-left"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className={`material-symbols-outlined text-primary text-[20px] ${isDetecting ? 'animate-spin' : ''}`}>
                      {isDetecting ? 'progress_activity' : 'my_location'}
                    </span>
                  </div>
                  <div>
                    <span className="text-primary font-bold text-body-md block">Use current location</span>
                    <span className="text-label-sm text-on-surface-variant">Using GPS</span>
                  </div>
                </button>

                {/* Pincode Results */}
                <div className="max-h-[280px] overflow-y-auto">
                  {filteredPincodes.length > 0 ? (
                    filteredPincodes.map(([code, data]) => (
                      <button
                        key={code}
                        onClick={() => handleSelectLocation(code, data)}
                        className={`w-full flex items-center gap-3 px-5 py-3 hover:bg-surface-container-low transition-colors text-left ${
                          selectedLocation?.pincode === code ? 'bg-primary-container/10' : ''
                        }`}
                      >
                        <span className="material-symbols-outlined text-on-surface-variant text-[20px]">location_on</span>
                        <div className="flex-1">
                          <span className="text-body-md font-semibold text-on-surface block">{data.name}</span>
                          <span className="text-label-sm text-on-surface-variant">{data.area} • {code}</span>
                        </div>
                        {selectedLocation?.pincode === code && (
                          <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                        )}
                      </button>
                    ))
                  ) : (
                    <div className="px-5 py-6 text-center text-on-surface-variant">
                      <span className="material-symbols-outlined text-[32px] mb-2 block opacity-40">search_off</span>
                      <p className="text-body-md">No locations found</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="hidden lg:flex bg-surface-container-low rounded-full px-4 py-2 items-center gap-2 border border-outline-variant/50 focus-within:border-secondary transition-colors max-w-sm w-full ml-4">
            <span className="material-symbols-outlined text-on-surface-variant">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-body-md w-full placeholder-on-surface-variant/50 focus:outline-none" placeholder="Search entire bazaar..." type="text" />
            <button className="hover:bg-primary-container/10 rounded-full transition-all duration-300 p-1 scale-95 active:scale-90 relative shrink-0">
              <span className="material-symbols-outlined text-primary">mic</span>
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex items-center justify-center gap-8 flex-1">
          <Link to="/" className={getLinkClass('/')}>Explore</Link>
          <Link to="/orders" className={getLinkClass('/orders')}>My Orders</Link>
          <Link to="/deals" className={getLinkClass('/deals')}>Deals</Link>
          <Link to="/seller" className={getLinkClass('/seller')}>Sell</Link>
        </div>
        
        <div className="flex items-center justify-end gap-2 md:gap-4 flex-1">
          <button className="hover:bg-primary-container/10 rounded-full p-2 scale-95 active:scale-90 relative text-on-surface-variant hidden md:flex shrink-0">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>notifications</span>
          </button>
          <button onClick={() => setIsCartOpen(true)} className="hover:bg-primary-container/10 rounded-full p-2 scale-95 active:scale-90 relative text-on-surface-variant shrink-0">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-error text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* ===== Login / Profile Button ===== */}
          {isLoggedIn ? (
            <div ref={userMenuRef} className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 bg-primary-container/15 hover:bg-primary-container/25 px-3 py-1.5 rounded-full transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-label-sm font-bold">
                  {getInitials(userEmail)}
                </div>
                <span className="hidden lg:block text-body-md font-medium text-on-surface max-w-[100px] truncate">{userEmail.split('@')[0]}</span>
                <span className="material-symbols-outlined text-on-surface-variant text-[16px]">expand_more</span>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-surface rounded-2xl shadow-2xl border border-outline-variant/30 z-[100] overflow-hidden animate-[fadeIn_0.2s_ease-out]">
                  <div className="px-4 py-3 border-b border-outline-variant/20">
                    <p className="text-body-md font-semibold text-on-surface truncate">{userEmail.split('@')[0]}</p>
                    <p className="text-label-sm text-on-surface-variant truncate">{userEmail}</p>
                  </div>
                  <div className="py-1">
                    <Link to="/orders" onClick={() => setShowUserMenu(false)} className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-container-low transition-colors text-on-surface">
                      <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                      <span className="text-body-md">My Orders</span>
                    </Link>
                    <Link to="/seller" onClick={() => setShowUserMenu(false)} className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-container-low transition-colors text-on-surface">
                      <span className="material-symbols-outlined text-[20px]">storefront</span>
                      <span className="text-body-md">Seller Dashboard</span>
                    </Link>
                    <button className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-container-low transition-colors text-on-surface w-full text-left">
                      <span className="material-symbols-outlined text-[20px]">settings</span>
                      <span className="text-body-md">Settings</span>
                    </button>
                  </div>
                  <div className="border-t border-outline-variant/20 py-1">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 transition-colors text-red-600 w-full text-left"
                    >
                      <span className="material-symbols-outlined text-[20px]">logout</span>
                      <span className="text-body-md font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="bg-primary-container text-white px-4 md:px-6 py-2 rounded-full font-label-sm hover:opacity-90 scale-95 active:scale-90 transition-transform shrink-0">Login</Link>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-surface z-[100] flex flex-col md:hidden animate-in fade-in slide-in-from-left-8 duration-300">
          <div className="flex justify-between items-center p-4 border-b border-outline-variant/30 h-20">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-display-bold text-headline-sm font-bold text-primary tracking-tighter">BazaarChain</Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-on-surface-variant active:scale-95">
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          
          <div className="p-4 border-b border-outline-variant/30 bg-surface-container-low">
             <div className="flex bg-surface rounded-full px-4 py-3 items-center gap-2 border border-outline-variant/50 focus-within:border-secondary transition-colors shadow-sm">
              <span className="material-symbols-outlined text-on-surface-variant">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-body-md w-full placeholder-on-surface-variant/50 focus:outline-none" placeholder="Search bazaar..." type="text" />
              <button className="text-primary p-1 hover:bg-primary/10 rounded-full">
                <span className="material-symbols-outlined">mic</span>
              </button>
            </div>
          </div>

          {/* Mobile Location Picker */}
          <div className="p-4 border-b border-outline-variant/30 bg-surface">
            <button
              onClick={handleDetectLocation}
              disabled={isDetecting}
              className="w-full flex items-center gap-3 p-3 rounded-2xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors mb-3"
            >
              <span className={`material-symbols-outlined text-primary ${isDetecting ? 'animate-spin' : ''}`}>
                {isDetecting ? 'progress_activity' : 'my_location'}
              </span>
              <div className="text-left">
                <span className="text-primary font-bold text-sm block">Use current location</span>
                <span className="text-label-sm text-on-surface-variant">Using GPS</span>
              </div>
            </button>
            {selectedLocation && (
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                <span className="text-sm font-semibold text-on-surface">{selectedLocation.name}, {selectedLocation.area}</span>
                <span className="text-label-sm">• {selectedLocation.pincode}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col p-6 gap-6 overflow-y-auto flex-1">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('/')}>
              <div className="flex items-center gap-4"><span className="material-symbols-outlined bg-surface-container-highest p-2 rounded-xl text-primary">explore</span>Explore</div>
            </Link>
            <Link to="/orders" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('/orders')}>
              <div className="flex items-center gap-4"><span className="material-symbols-outlined bg-surface-container-highest p-2 rounded-xl text-primary">receipt_long</span>My Orders</div>
            </Link>
            <Link to="/deals" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('/deals')}>
              <div className="flex items-center gap-4"><span className="material-symbols-outlined bg-surface-container-highest p-2 rounded-xl text-primary">local_offer</span>Deals</div>
            </Link>
            <Link to="/seller" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('/seller')}>
              <div className="flex items-center gap-4"><span className="material-symbols-outlined bg-surface-container-highest p-2 rounded-xl text-primary">storefront</span>Sell</div>
            </Link>
          </div>
          
          <div className="mt-auto p-6 border-t border-outline-variant/30 bg-surface-container-low pb-10">
            {isLoggedIn ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 bg-surface p-4 rounded-2xl shadow-sm border border-outline-variant/20">
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                    {getInitials(userEmail)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{userEmail.split('@')[0]}</p>
                    <p className="text-[11px] text-on-surface-variant">{userEmail}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 text-red-600 font-medium border border-red-200 p-3 rounded-xl hover:bg-red-50 transition-colors"
                >
                  <span className="material-symbols-outlined">logout</span>
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-primary-container text-white p-3 rounded-xl font-semibold"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
