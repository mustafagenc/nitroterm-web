export const Features = () => {
  return (
    <>
      <div
        className="w-full h-px max-w-6xl mx-auto"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(149, 131, 198, 0) 1.46%, rgba(149, 131, 198, 0.6) 40.83%, rgba(149, 131, 198, 0.3) 65.57%, rgba(149, 131, 198, 0) 107.92%)",
        }}
      ></div>
      <section
        id="features"
        className="text-white min-h-screen flex items-center justify-center p-10"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-shadow-md">
            ✨ Features
          </h2>
          <p className=" text-center text-lg mb-8">
            Everything you need for modern project management in one powerful
            terminal tool
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            <div className="group p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/40  hover:border-purple-400/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">
                📋 Release Notes Generation
              </h3>
              <ul className="list-disc list-inside transition-colors">
                <li>Smart Git Analysis</li>
                <li>Conventional Commits Support</li>
                <li>Categorized Output</li>
                <li>Markdown Export</li>
              </ul>
            </div>
            <div className="group p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/60 hover:border-blue-400/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">
                🔄 Version Management
              </h3>
              <ul className="list-disc list-inside transition-colors">
                <li>Semantic Versioning</li>
                <li>Git Tag Creation</li>
                <li>Release Creation</li>
                <li>Changelog Generation</li>
              </ul>
            </div>
            <div className="group p-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">
                📦 Dependency Management
              </h3>
              <ul className="list-disc list-inside transition-colors">
                <li>Multi-Language Support</li>
                <li>Smart Detection</li>
                <li>Security Auditing</li>
                <li>Backup & Restore</li>
              </ul>
            </div>

            <div className="group p-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">
                🌐 Translation Management
              </h3>
              <ul className="list-disc list-inside transition-colors">
                <li>JSON Translation Sync</li>
                <li>Missing Key Detection</li>
                <li>Key Validation</li>
                <li>Multi-format Support</li>
              </ul>
            </div>
            <div className="group p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/50 hover:border-blue-400/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">
                🎯 Interactive Mode
              </h3>
              <ul className="list-disc list-inside transition-colors">
                <li>User-Friendly Menu</li>
                <li>Command Validation</li>
                <li>Progress Indicators</li>
                <li>Colored Output</li>
              </ul>
            </div>
            <div className="group p-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">🚀 Cross-Platform</h3>
              <ul className="list-disc list-inside transition-colors">
                <li>Windows, macOS, Linux</li>
                <li>Single Binary</li>
                <li>No Dependencies</li>
                <li>Fast Performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
