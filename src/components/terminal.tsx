export const Terminal = () => {
  return (
    <div className="order-1 lg:order-2">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-2xl blur-sm opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>

        {/* Screenshot container */}
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl border border-gray-700/50 overflow-hidden shadow-2xl">
          {/* Window controls */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 border-b border-gray-700/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm text-gray-400 font-mono">
                nitroterm v0.1.0-alpha.1
              </span>
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative">


            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute -top-4 -right-4 z-10">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            New Release
          </div>
        </div>
      </div>
    </div>
  );
};
