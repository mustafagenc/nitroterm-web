import { CONTACT_URL, GITHUB_URL } from "@/lib/constants";
import { NitrokitText } from "../components/nitrokit";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-900 via-violet-600 to-purple-700 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20 backdrop-blur-sm"></div>
        <nav className="relative z-10 container mx-auto px-6 py-6">
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
                className="text-slate-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#installation"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Installation
              </a>
              <a
                href="#usage"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Usage
              </a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center items-center my-8 w-full">
              <div className="mx-auto flex justify-center">
                <NitrokitText />
              </div>
            </div>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Powerful terminal application written in Rust that provides
              comprehensive project management functionalities, automatic
              release notes generation, and intelligent dependency management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#installation"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started
              </a>
              <a
                href={GITHUB_URL}
                className="border border-slate-400 text-slate-300 hover:text-white hover:border-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <span className="text-white text-xl font-bold">
                    NitroKit Terminal
                  </span>
                </div>
                <p className="text-slate-300 mb-4 max-w-md">
                  Powerful terminal application for comprehensive project
                  management, written in Rust with modern features and
                  cross-platform support.
                </p>
                <div className="flex space-x-4">
                  <a
                    href={GITHUB_URL}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>
                    <a
                      href="#features"
                      className="hover:text-white transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#installation"
                      className="hover:text-white transition-colors"
                    >
                      Installation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#usage"
                      className="hover:text-white transition-colors"
                    >
                      Usage
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${GITHUB_URL}/releases`}
                      className="hover:text-white transition-colors"
                    >
                      Releases
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>
                    <a
                      href={GITHUB_URL}
                      className="hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${GITHUB_URL}/issues`}
                      className="hover:text-white transition-colors"
                    >
                      Issues
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${GITHUB_URL}/discussions`}
                      className="hover:text-white transition-colors"
                    >
                      Discussions
                    </a>
                  </li>
                  <li>
                    <a
                      href={CONTACT_URL}
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/5 mt-12 pt-8 text-center">
              <p className="transition-colors">
                Made with ❤️ by{" "}
                <a
                  href="https://mustafagenc.info"
                  className="transition-colors hover:underline hover:underline-offset-3"
                >
                  Mustafa Genc
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}