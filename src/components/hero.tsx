import { GITHUB_URL } from "@lib/constants";
import { NitrokitText } from "@/components/nitrokit";
import { FaGithub } from "react-icons/fa";
import { GrInstall } from "react-icons/gr";
import Code from "./code";

export const Hero = () => {
    return (
      <div className="relative container mx-auto text-center mt-20 lg:mt-40 p-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center my-8 w-full">
            <div className="mx-auto flex justify-center">
              <NitrokitText />
            </div>
          </div>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-medium text-shadow-xs">
            Powerful terminal application written in Rust that provides
            comprehensive project management functionalities, automatic release
            notes generation, and intelligent dependency management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-20">
            <a
              href="#installation"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <GrInstall size={30} /> Get Started
            </a>
            <a
              href={GITHUB_URL}
              className="flex items-center gap-3 border border-white text-white hover:text-white  hover:bg-slate-800 hover:border-slate-700 px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              <FaGithub size={30} /> View on GitHub
            </a>
          </div>
        </div>
        <div className="mt-20 mx-auto text-left max-w-2xl">
          <Code>{`curl -sSL https://raw.githubusercontent.com/mustafagenc/nitroterm/\nrefs/heads/main/scripts/install.sh | bash`}</Code>
        </div>
      </div>
    );
}