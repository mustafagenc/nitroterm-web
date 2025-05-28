export const Features = () => {
  return (
    <section id="features" className="text-white min-h-screen flex items-center justify-center border-t border-gray-50/20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">✨ Features</h2>
        <p className=" text-center text-lg mb-8">
          Everything you need for modern project management in one powerful
          terminal tool
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              📋 Release Notes Generation
            </h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Smart Git Analysis</li>
              <li>Conventional Commits Support</li>
              <li>Categorized Output</li>
              <li>Markdown Export</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              🔄 Version Management
            </h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Semantic Versioning</li>
              <li>Git Tag Creation</li>
              <li>Release Creation</li>
              <li>Changelog Generation</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              📦 Dependency Management
            </h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Multi-Language Support</li>
              <li>Smart Detection</li>
              <li>Security Auditing</li>
              <li>Backup & Restore</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              🌐 Translation Management
            </h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>JSON Translation Sync</li>
              <li>Missing Key Detection</li>
              <li>Key Validation</li>
              <li>Multi-format Support</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">🎯 Interactive Mode</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>User-Friendly Menu</li>
              <li>Command Validation</li>
              <li>Progress Indicators</li>
              <li>Colored Output</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">🚀 Cross-Platform</h3>
            <ul className="list-disc list-inside text-gray-400">
              <li>Windows, macOS, Linux</li>
              <li>Single Binary</li>
              <li>No Dependencies</li>
              <li>Fast Performance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
