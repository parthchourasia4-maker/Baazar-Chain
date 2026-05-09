import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderCard, { type Order } from '../components/orders/OrderCard';
import { useCart } from '../context/CartContext';

const mockOrders: Order[] = [
  {
    id: "BZ-9823-XYZ",
    placedOn: "Today, 10:30 AM",
    status: "Escrow",
    timelineStatus: "Arriving Today",
    isVerified: true,
    item: {
      name: "Ratnagiri Alphonso Mangoes (1 Dozen)",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80",
      seller: "Raju's Fresh Produce",
      qty: 1,
      price: 850
    }
  },
  {
    id: "BZ-4511-ABC",
    placedOn: "Yesterday, 04:15 PM",
    status: "Completed",
    item: {
      name: "Handpainted Ceramic Bowls (Set of 4)",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=400&q=80",
      seller: "Aarti Crafts",
      qty: 1,
      price: 1200
    }
  }
];

import TopNavBar from '../components/TopNavBar';

export default function MyOrders() {
  const [activeTab, setActiveTab] = useState<'active' | 'past'>('active');

  return (
    <div className="antialiased min-h-screen bg-background text-on-background font-body-md flex flex-col pt-24">
      <TopNavBar />

      <main className="max-w-4xl mx-auto px-container-padding w-full flex-grow pb-24">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-display-bold text-[32px] text-on-surface mb-2">My Orders</h1>
          <p className="font-body-md text-on-surface-variant">Track, manage and confirm your hyperlocal purchases.</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-outline-variant/30 mb-8">
          <button 
            onClick={() => setActiveTab('active')}
            className={`pb-3 font-title-md font-bold px-2 transition-colors relative ${activeTab === 'active' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            Active Orders
            {activeTab === 'active' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></span>}
          </button>
          <button 
            onClick={() => setActiveTab('past')}
            className={`pb-3 font-title-md font-bold px-2 transition-colors relative ${activeTab === 'past' ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            Past Orders
            {activeTab === 'past' && <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></span>}
          </button>
        </div>

        {/* Orders List */}
        <div className="flex flex-col gap-6">
          {mockOrders
            .filter(o => activeTab === 'active' ? o.status === 'Escrow' : o.status !== 'Escrow')
            .map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
          
          {mockOrders.filter(o => activeTab === 'active' ? o.status === 'Escrow' : o.status !== 'Escrow').length === 0 && (
            <div className="text-center py-12 bg-surface-container-lowest rounded-2xl border border-outline-variant/20">
              <span className="material-symbols-outlined text-[48px] text-on-surface-variant/50 mb-4">inbox</span>
              <h3 className="font-title-md text-lg text-on-surface font-bold">No orders found</h3>
              <p className="text-on-surface-variant text-sm mt-2">You don't have any {activeTab} orders right now.</p>
            </div>
          )}
        </div>
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
