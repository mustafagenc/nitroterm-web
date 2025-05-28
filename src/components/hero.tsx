import { NitrokitText } from "@/components/nitrokit";
import Code from "./code";
import { GithubButtonWithStats } from "@components/github-button-with-stats";
import DownloadButton from "./download-button";

export const Hero = () => {
  return (
    <div className="relative container mx-auto text-center mt-20 lg:mt-30 p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center my-8 w-full">
          <div className="mx-auto flex justify-center">
            <NitrokitText />
          </div>
        </div>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-medium text-shadow-xs">
          Nitroterm is a powerful terminal application written in Rust that
          offers comprehensive project management functionalities, automatic
          release notes generation, and intelligent dependency management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-20">
          <DownloadButton />
          <GithubButtonWithStats />
        </div>
      </div>
      <div className="mt-20 mx-auto text-left max-w-2xl">
        <Code>{`curl -sSL https://raw.githubusercontent.com/mustafagenc/nitroterm/\nrefs/heads/main/scripts/install.sh | bash`}</Code>
      </div>
    </div>
  );
};
