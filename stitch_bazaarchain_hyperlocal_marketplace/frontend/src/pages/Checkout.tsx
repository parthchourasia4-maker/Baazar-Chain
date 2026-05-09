import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import TopNavBar from '../components/TopNavBar';

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod'>('razorpay');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto redirect if cart is empty
  React.useEffect(() => {
    if (items.length === 0 && !isSuccess) {
      navigate('/');
    }
  }, [items, navigate, isSuccess]);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    // Simulate network request / payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      // Clear cart
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="antialiased min-h-screen bg-background text-on-background flex flex-col pt-24">
        <TopNavBar />
        <main className="flex-grow flex items-center justify-center p-6">
          <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-xl max-w-md w-full text-center border border-outline-variant/30 animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-primary-container rounded-full mx-auto flex items-center justify-center mb-6 shadow-inner">
              <span className="material-symbols-outlined text-[48px] text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h1 className="font-display-bold text-3xl text-primary mb-2">Order Confirmed!</h1>
            <p className="font-body-md text-on-surface-variant mb-8">
              Your hyperlocal group buy has been placed. We'll deliver it to your society soon.
            </p>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => navigate('/orders')}
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-title-md font-bold hover:bg-primary/90 transition-colors shadow-md"
              >
                Track My Order
              </button>
              <button 
                onClick={() => navigate('/')}
                className="w-full bg-surface-container-high text-on-surface py-4 rounded-xl font-title-md font-bold hover:bg-surface-container-highest transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="antialiased min-h-screen bg-background text-on-background flex flex-col pt-24 pb-24">
      <TopNavBar />
      
      <main className="max-w-6xl mx-auto w-full px-4 md:px-8">
        <h1 className="font-display-bold text-headline-lg text-on-surface mb-8">Secure Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Details & Payment */}
          <div className="flex-1 flex flex-col gap-8">
            
            {/* Delivery Details */}
            <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-[28px]">local_shipping</span>
                <h2 className="font-display-bold text-title-lg text-on-surface">Delivery Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First Name" defaultValue="Amit" className="bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md focus:outline-none focus:border-primary-container" />
                <input type="text" placeholder="Last Name" defaultValue="Sharma" className="bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md focus:outline-none focus:border-primary-container" />
              </div>
              <input type="text" placeholder="Phone Number" defaultValue="+91 9876543210" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md mb-4 focus:outline-none focus:border-primary-container" />
              <textarea placeholder="Society / Apartment Address" rows={3} defaultValue="A-402, Sunshine Apartments, MG Road, Indore - 452001" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md focus:outline-none focus:border-primary-container resize-none"></textarea>
            </div>

            {/* Payment Method */}
            <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-[28px]">payments</span>
                <h2 className="font-display-bold text-title-lg text-on-surface">Payment Method</h2>
              </div>
              
              <div className="flex flex-col gap-4">
                {/* Razorpay Option */}
                <label 
                  className={`flex items-start p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'razorpay' ? 'border-primary bg-primary-container/10' : 'border-outline-variant/30 bg-surface-container-low hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center h-6">
                    <input 
                      type="radio" 
                      name="payment" 
                      value="razorpay"
                      checked={paymentMethod === 'razorpay'}
                      onChange={() => setPaymentMethod('razorpay')}
                      className="w-5 h-5 text-primary bg-surface border-outline-variant focus:ring-primary focus:ring-2"
                    />
                  </div>
                  <div className="ml-4 flex flex-col flex-1">
                    <span className="font-title-md font-bold text-on-surface">Pay via Razorpay</span>
                    <span className="text-sm text-on-surface-variant font-medium mt-1">UPI, Credit/Debit Cards, NetBanking</span>
                    
                    {paymentMethod === 'razorpay' && (
                      <div className="mt-4 p-4 bg-surface-container-highest rounded-xl flex items-center gap-3 text-sm font-bold text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary">verified_user</span>
                        Secure payment gateway integration will open on next step.
                      </div>
                    )}
                  </div>
                </label>

                {/* COD Option */}
                <label 
                  className={`flex items-start p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'cod' ? 'border-primary bg-primary-container/10' : 'border-outline-variant/30 bg-surface-container-low hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center h-6">
                    <input 
                      type="radio" 
                      name="payment" 
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="w-5 h-5 text-primary bg-surface border-outline-variant focus:ring-primary focus:ring-2"
                    />
                  </div>
                  <div className="ml-4 flex flex-col flex-1">
                    <span className="font-title-md font-bold text-on-surface">Cash on Delivery</span>
                    <span className="text-sm text-on-surface-variant font-medium mt-1">Pay when your order arrives</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/30 shadow-sm sticky top-28">
              <h2 className="font-display-bold text-title-lg text-on-surface mb-6 border-b border-outline-variant/20 pb-4">Order Summary</h2>
              
              <div className="flex flex-col gap-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="relative">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl border border-outline-variant/20" />
                      <span className="absolute -top-2 -right-2 bg-secondary-container text-on-secondary-container text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                        {item.qty}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-title-md text-sm font-bold text-on-surface leading-tight line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-on-surface-variant mt-1">{item.seller}</p>
                    </div>
                    <span className="font-title-md font-bold text-on-surface">₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-outline-variant/20 pt-4 flex flex-col gap-3 mb-6">
                <div className="flex justify-between text-sm font-medium text-on-surface-variant">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-on-surface-variant">
                  <span>Delivery Fee</span>
                  <span className="text-secondary font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-lg font-display-bold text-primary mt-2 pt-2 border-t border-outline-variant/20">
                  <span>Total to Pay</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <button 
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-title-md font-bold text-lg shadow-lg hover:bg-primary/90 transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Processing...
                  </>
                ) : (
                  <>
                    {paymentMethod === 'razorpay' ? 'Proceed to Pay' : 'Place Order'}
                    <span className="material-symbols-outlined">lock</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
