import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function TopNavBar() {
  const { setIsCartOpen, cartCount } = useCart();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <div className="hidden md:flex bg-surface-container-low rounded-full px-4 py-2 items-center gap-2 border border-outline-variant/50 focus-within:border-secondary transition-colors max-w-md w-full ml-4">
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
          <div className="hidden md:flex items-center gap-1 text-on-surface-variant text-label-sm font-medium mr-4">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span>452001</span>
          </div>
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
          <Link to="/login" className="bg-primary-container text-white px-4 md:px-6 py-2 rounded-full font-label-sm hover:opacity-90 scale-95 active:scale-90 transition-transform shrink-0">Login</Link>
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
            <div className="flex items-center gap-3 text-on-surface-variant font-medium mb-6 bg-surface p-4 rounded-2xl shadow-sm border border-outline-variant/20">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Delivery to</span>
                <span className="text-on-surface text-sm">Indore 452001</span>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 text-on-surface-variant font-medium border border-outline-variant/50 p-3 rounded-xl hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span>Notifications</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
