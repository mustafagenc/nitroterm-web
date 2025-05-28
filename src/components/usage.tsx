import Code from "./code";

export const Usage = () => {
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
      id="usage"
      className="text-white min-h-screen flex items-center justify-center p-10"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-shadow-md">
          🚀 Usage
        </h2>
        <p className=" text-center text-lg mb-8">
          Simple commands for powerful functionality
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 ">
          <div>
            <div className="text-2xl">Command Examples</div>
            <Code className="h-86">{`Interactive Mode\n
$ nitrokit\n
Generate Release Notes\n
$ nitrokit release-notes\n
Create Release\n
$ nitrokit create-release patch\n
Update Dependencies\n
$ nitrokit update-dependencies\n`}</Code>
          </div>
          <div>
            <div className="text-2xl">Interactive Menu</div>
            <Code className="h-86">{`🚀 Nitrokit Terminal Tool v0.1.2\n
Available commands:\n
1. release-notes\n
2. create-release\n
3. update-dependencies\n
4. sync-translations\n
5. help\n
6. exit\n
nitrokit> █`}</Code>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
