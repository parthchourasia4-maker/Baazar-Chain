export default function DesktopNav() {
  return (
    <nav className="hidden md:flex fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-lg shadow-sm shadow-[0_10px_30px_rgba(249,115,22,0.15)] px-container-padding py-3 items-center justify-between">
      <div className="flex items-center gap-8">
        <h1 className="font-display-bold text-display-bold text-primary tracking-tight text-2xl">BazaarChain</h1>
        <div className="flex items-center gap-1">
          <a className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant hover:bg-primary/10 rounded-full transition-colors flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-[20px]" data-icon="home">home</span> Home
          </a>
          <a className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant hover:bg-primary/10 rounded-full transition-colors flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-[20px]" data-icon="groups">groups</span> Group Buy
          </a>
          <a className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant hover:bg-primary/10 rounded-full transition-colors flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-[20px]" data-icon="photo_camera">photo_camera</span> Sell
          </a>
          <a className="px-4 py-2 font-label-sm text-label-sm bg-primary-container text-on-primary-container rounded-full flex items-center gap-2 shadow-sm" href="#">
            <span className="material-symbols-outlined text-[20px]" data-icon="shopping_bag" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span> Orders
          </a>
          <a className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant hover:bg-primary/10 rounded-full transition-colors flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-[20px]" data-icon="person">person</span> Profile
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-label-sm text-label-sm text-primary bg-surface-container-low px-4 py-2 rounded-full cursor-pointer hover:bg-surface-container-high transition-colors shadow-sm">452001 ▾</span>
        <button className="text-primary bg-surface-container-lowest shadow-sm hover:bg-surface-container-low transition-colors p-2 rounded-full active:scale-95 duration-200">
          <span className="material-symbols-outlined" data-icon="mic">mic</span>
        </button>
      </div>
    </nav>
  );
}
