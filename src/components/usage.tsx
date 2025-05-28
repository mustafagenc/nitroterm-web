import Code from "./code";

export const Usage = () => {
  return (
    <section
      id="usage"
      className="text-white min-h-screen flex items-center justify-center border-t border-gray-50/20"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">🚀 Usage</h2>
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
            <Code className="h-86">{`🚀 NitroKit Terminal Tool v0.1.2\n
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
  );
};
