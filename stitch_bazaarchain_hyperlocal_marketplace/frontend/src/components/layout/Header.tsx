export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-lg shadow-sm shadow-[0_10px_30px_rgba(249,115,22,0.15)] md:hidden">
      <div className="flex justify-between items-center px-container-padding py-2 w-full max-w-[768px] mx-auto">
        <div className="flex items-center gap-2">
          <span className="font-label-sm text-label-sm text-primary dark:text-primary-fixed-dim bg-surface-container-low px-3 py-1 rounded-full cursor-pointer hover:bg-surface-container-high transition-colors">452001 ▾</span>
        </div>
        <h1 className="font-display-bold text-display-bold text-primary dark:text-primary-fixed-dim tracking-tight text-xl">BazaarChain</h1>
        <button className="text-primary dark:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors p-2 rounded-full active:scale-95 duration-200">
          <span className="material-symbols-outlined" data-icon="mic">mic</span>
        </button>
      </div>
    </header>
  );
}
