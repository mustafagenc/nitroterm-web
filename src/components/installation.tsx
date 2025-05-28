import Code from "./code";

export const Installation = () => {
  return (
    <section
      id="installation"
      className="text-white min-h-screen flex items-center justify-center border-t border-gray-50/20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          🛠️ Installation
        </h2>
        <p className=" text-center text-lg mb-8">
          Get started with NitroKit in seconds
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 ">
          <div>
            <div className="text-2xl font-bold">
              Quick Install (Unix/Linux/macOS)
            </div>
            <Code className="h-50">{`curl -sSL https://raw.githubusercontent.com/mustafagenc/nitrokit-terminal/\nrefs/heads/main/scripts/install.sh | bash`}</Code>
          </div>
          <div>
            <div className="text-2xl font-bold">Manual Installation</div>
            <Code className="h-50">{`# Download latest release\n
wget github.com/releases/latest\n
chmod +x nitrokit\n
sudo mv nitrokit /usr/local/bin/`}</Code>
          </div>
        </div>
      </div>
    </section>
  );
};
