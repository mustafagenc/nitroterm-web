import Link from "next/link";
import ClientVersion from "./client-version";

export const Logo = () => {
  return (
    <Link href={"#home"} className="flex items-center space-x-3">
      <div className="relative w-10 h-10 group">
        {/* Modern hexagon shape */}
        <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-500 ease-out shadow-lg">
          <div className="w-full h-full bg-black/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <span className="text-white font-black text-lg font-[family-name:var(--font-lexend)] -rotate-12 group-hover:rotate-0 transition-transform duration-500">
              N
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-white text-2xl text-shadow-xs font-bold font-[family-name:var(--font-lexend)]">
          Nitroterm
        </span>
        <ClientVersion />
      </div>
    </Link>
  );
};
