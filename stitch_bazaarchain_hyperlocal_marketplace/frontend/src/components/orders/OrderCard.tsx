import OrderTimeline, { type TimelineStatus } from './OrderTimeline';

export interface Order {
  id: string;
  placedOn: string;
  status: 'Escrow' | 'Processing' | 'Completed' | 'Cancelled';
  timelineStatus?: TimelineStatus;
  isVerified?: boolean;
  item: {
    name: string;
    image: string;
    seller: string;
    qty: number;
    price: number;
  };
}

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const isEscrow = order.status === 'Escrow';

  return (
    <article className={`bg-surface-container-lowest rounded-xl p-6 flex flex-col gap-6 relative overflow-hidden border ${isEscrow ? 'border-surface-container-highest shadow-[0_10px_30px_rgba(249,115,22,0.15)]' : 'border-surface-container shadow-sm'}`}>
      
      {/* Verification Badge */}
      {order.isVerified && (
        <div className="absolute top-0 left-6 bg-secondary text-on-secondary px-3 py-1 rounded-b-lg font-label-sm text-label-sm flex items-center gap-1 shadow-sm">
          <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          Ekdum Asli
        </div>
      )}

      {/* Header */}
      <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${order.isVerified ? 'mt-4 md:mt-0' : ''}`}>
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isEscrow ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-surface-container text-on-surface-variant'}`}>
            <span className="material-symbols-outlined" data-icon={isEscrow ? "lock" : "pending"} style={isEscrow ? { fontVariationSettings: "'FILL' 1" } : {}}>
              {isEscrow ? 'lock' : 'pending'}
            </span>
          </div>
          <div>
            <h3 className="font-title-md text-title-md text-on-surface">Order #{order.id}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Placed on {order.placedOn}</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className={`px-4 py-2 rounded-full flex items-center gap-2 ${isEscrow ? 'bg-surface-container-low border border-primary-fixed-dim' : 'bg-surface-container'}`}>
          {isEscrow && <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>}
          <span className={`font-label-sm text-label-sm ${isEscrow ? 'text-primary' : 'text-on-surface-variant'}`}>
            {isEscrow && order.timelineStatus === 'Arriving Today' ? 'Out for Delivery' : order.status}
          </span>
        </div>
      </div>

      {isEscrow && <hr className="border-t border-surface-container" />}

      {/* Item Details */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className={`w-full rounded-lg bg-surface-container overflow-hidden shrink-0 ${isEscrow ? 'h-32 md:w-32' : 'h-24 md:w-24'}`}>
          <img alt={order.item.name} className="w-full h-full object-cover" src={order.item.image} />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h4 className="font-title-md text-title-md text-on-surface">{order.item.name}</h4>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Seller: {order.item.seller}</p>
          <div className="flex items-center gap-4 mt-3">
            <span className="font-label-sm text-label-sm bg-surface-container-low px-2 py-1 rounded text-on-surface-variant">Qty: {order.item.qty}</span>
            <span className={`font-title-md text-title-md ${isEscrow ? 'text-primary' : 'text-on-surface'}`}>₹{order.item.price}</span>
          </div>
        </div>
      </div>

      {/* Escrow Timeline and Action */}
      {isEscrow && order.timelineStatus && (
        <>
          <OrderTimeline currentStatus={order.timelineStatus} />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-2">
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary" data-icon="shield">shield</span>
              Funds are locked in Escrow until you confirm delivery.
            </p>
            <button className="w-full sm:w-auto bg-secondary hover:bg-secondary-container hover:text-on-secondary-container text-on-secondary font-label-sm text-label-sm px-8 py-3 rounded-full shadow-lg shadow-secondary/30 transition-all active:scale-95 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined" data-icon="task_alt">task_alt</span>
              Confirm Delivery
            </button>
          </div>
        </>
      )}
    </article>
  );
}
