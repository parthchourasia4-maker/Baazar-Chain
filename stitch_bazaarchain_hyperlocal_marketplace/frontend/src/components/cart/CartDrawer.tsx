import React from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQty, total } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-surface-container-lowest z-[101] shadow-2xl flex flex-col transform transition-transform duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-outline-variant/30">
          <h2 className="font-display-bold text-2xl text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[28px]">shopping_cart</span>
            Your Cart
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors text-on-surface-variant"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-on-surface-variant opacity-70">
              <span className="material-symbols-outlined text-[64px] mb-4">production_quantity_limits</span>
              <p className="font-body-md text-lg">Your cart is empty.</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 bg-surface-container-low p-4 rounded-2xl relative group border border-outline-variant/20">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                <div className="flex-1 flex flex-col">
                  <h3 className="font-title-md text-sm text-on-surface font-bold leading-tight">{item.name}</h3>
                  <p className="text-[10px] font-bold text-on-surface-variant mt-1 uppercase tracking-wider">{item.seller}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-display-bold text-lg text-primary">₹{item.price}</span>
                    <div className="flex items-center gap-3 bg-surface-container-highest rounded-full px-2 py-1">
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/50 text-on-surface font-bold">-</button>
                      <span className="font-title-md text-sm w-4 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/50 text-on-surface font-bold">+</button>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="absolute -top-2 -right-2 bg-error text-white p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low/50">
            <div className="flex justify-between items-center mb-6">
              <span className="font-title-md text-on-surface-variant font-bold">Total Amount</span>
              <span className="font-display-bold text-2xl text-on-surface">₹{total}</span>
            </div>
            <button 
              onClick={() => {
                setIsCartOpen(false);
                navigate('/checkout');
              }}
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-title-md font-bold text-lg shadow-lg hover:bg-primary/90 transition-colors flex justify-center items-center gap-2"
            >
              Proceed to Checkout
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
