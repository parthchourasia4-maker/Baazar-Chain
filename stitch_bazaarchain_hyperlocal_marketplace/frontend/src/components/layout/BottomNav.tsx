export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-4 right-4 rounded-full z-50 bg-surface-container/80 dark:bg-surface-container-highest/80 backdrop-blur-lg shadow-lg shadow-[0_10px_30px_rgba(249,115,22,0.15)] md:hidden">
      <div className="flex justify-around items-center w-full max-w-[768px] mx-auto h-16 px-2">
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant p-3 hover:bg-primary/10 transition-colors rounded-full w-16" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-label-sm text-label-sm text-[10px] mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant p-3 hover:bg-primary/10 transition-colors rounded-full w-16" href="#">
          <span className="material-symbols-outlined" data-icon="groups">groups</span>
          <span className="font-label-sm text-label-sm text-[10px] mt-1 truncate w-full text-center">Group Buy</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant p-3 hover:bg-primary/10 transition-colors rounded-full w-16" href="#">
          <span className="material-symbols-outlined" data-icon="photo_camera">photo_camera</span>
          <span className="font-label-sm text-label-sm text-[10px] mt-1">Sell</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-full p-3 active:scale-90 transition-transform duration-200 w-16 h-14 -mt-2 shadow-md" href="#">
          <span className="material-symbols-outlined" data-icon="shopping_bag" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
          <span className="font-label-sm text-label-sm text-[10px] mt-0.5">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant p-3 hover:bg-primary/10 transition-colors rounded-full w-16" href="#">
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-label-sm text-label-sm text-[10px] mt-1">Profile</span>
        </a>
      </div>
    </nav>
  );
}
