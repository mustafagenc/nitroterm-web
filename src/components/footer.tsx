import { CONTACT_URL, GITHUB_URL } from "@/lib/constants";

export const Footer = () => {
    return (
      <>
        <div
          className="w-full h-px max-w-6xl mx-auto"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
          }}
        ></div>
        <footer className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">N</span>
                    </div>
                    <span className="text-white text-xl font-bold text-shadow-sm font-[family-name:var(--font-lexend)]">
                      Nitrokit Terminal
                    </span>
                  </div>
                  <p className="text-slate-100 mb-4 max-w-md font-semibold text-shadow-sm">
                    Powerful terminal application for comprehensive project
                    management, written in Rust with modern features and
                    cross-platform support.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={GITHUB_URL}
                      className="text-white hover:text-white/70 transition-colors"
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
                  <h3 className="text-white font-semibold mb-4 text-shadow-sm underline underline-offset-8">
                    Quick Links
                  </h3>
                  <ul className="space-y-2 text-slate-100">
                    <li>
                      <a
                        href="#features"
                        className="hover:text-white transition-colors text-shadow-sm"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#installation"
                        className="hover:text-white transition-colors text-shadow-sm"
                      >
                        Installation
                      </a>
                    </li>
                    <li>
                      <a
                        href="#usage"
                        className="hover:text-white transition-colors text-shadow-sm"
                      >
                        Usage
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${GITHUB_URL}/releases`}
                        className="hover:text-white transition-colors text-shadow-sm"
                      >
                        Releases
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-white font-semibold mb-4 text-shadow-sm underline underline-offset-8">
                    Resources
                  </h3>
                  <ul className="space-y-2 text-slate-100">
                    <li>
                      <a
                        href={GITHUB_URL}
                        className="hover:text-white transition-colors text-shadow-sm"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${GITHUB_URL}/issues`}
                        className="hover:text-white transition-colors text-shadow-sm"
                      >
                        Issues
                      </a>
                    </li>
                    <li>
                      <a
                        href={`${GITHUB_URL}/discussions`}
                        className="hover:text-white transition-colors text-shadow-sm"
                      >
                        Discussions
                      </a>
                    </li>
                    <li>
                      <a
                        href={CONTACT_URL}
                        className="hover:text-white transition-colors text-shadow-sm"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" mt-12 pt-8 text-center">
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
      </>
    );
}