export const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 backdrop-blur-xs">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-shadow-2xl w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl font-[family-name:var(--font-lexend)]">
                N
              </span>
            </div>
            <span className="text-white text-3xl font-bold text-shadow-xs font-[family-name:var(--font-lexend)]">
              Nitrokit
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-slate-300 hover:text-white transition-colors hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#installation"
              className="text-slate-300 hover:text-white transition-colors hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium"
            >
              Installation
            </a>
            <a
              href="#usage"
              className="text-slate-300 hover:text-white transition-colors hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium"
            >
              Usage
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
