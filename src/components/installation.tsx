import Code from "./code";

export const Installation = () => {
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
        id="installation"
        className="text-white min-h-screen flex items-center justify-center  p-10"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-shadow-md">
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
              <Code className="h-50">{`curl -sSL https://raw.githubusercontent.com/\nmustafagenc/nitroterm/\nrefs/heads/main/scripts/install.sh \n| bash`}</Code>
            </div>
            <div>
              <div className="text-2xl font-bold">Manual Installation</div>
              <Code className="h-50">{`# Download latest release\n
wget https://github.com/mustafagenc/nitroterm/releases\n
chmod +x nitroterm\n
sudo mv nitroterm /usr/local/bin/`}</Code>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
