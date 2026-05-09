export type TimelineStatus = 'Ordered' | 'Packed' | 'Dispatched' | 'Arriving Today' | 'Delivered';

const STATUS_STEPS: TimelineStatus[] = ['Ordered', 'Packed', 'Dispatched', 'Arriving Today'];

interface OrderTimelineProps {
  currentStatus: TimelineStatus;
}

export default function OrderTimeline({ currentStatus }: OrderTimelineProps) {
  const currentIndex = STATUS_STEPS.indexOf(currentStatus);
  
  // Calculate progress bar width based on completed steps.
  // If current is 'Arriving Today' (index 3), 3 steps completed = ~85% for visual effect.
  const progressPercentage = currentIndex >= 0 ? Math.min((currentIndex / (STATUS_STEPS.length - 1)) * 100, 85) : 0;

  return (
    <div className="bg-surface-container p-4 rounded-lg">
      <div className="flex items-center justify-between relative z-10">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-container-high -z-10 -translate-y-1/2">
          <div className="h-full bg-secondary transition-all duration-500 ease-in-out" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        
        {STATUS_STEPS.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;
          const isPending = index > currentIndex;

          return (
            <div key={step} className="flex flex-col items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${
                isCompleted 
                  ? 'bg-secondary text-on-secondary' 
                  : isCurrent 
                    ? 'bg-surface-container-lowest border-2 border-secondary' 
                    : 'bg-surface-container-lowest border-2 border-surface-variant'
              }`}>
                {isCompleted && (
                   <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                )}
                {isCurrent && (
                   <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                )}
              </div>
              <span className={`font-label-sm text-label-sm hidden md:block ${
                isCurrent ? 'text-secondary' : isPending ? 'text-on-surface-variant' : 'text-on-surface'
              }`}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
