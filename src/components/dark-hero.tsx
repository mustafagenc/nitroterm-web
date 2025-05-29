"use client";
import { NitrokitText } from "@/components/nitrokit";
import Code from "./code";
import { GithubButtonWithStats } from "@components/github-button-with-stats";
import DownloadButton from "./download-button";
import Image from "next/image";

export const DarkHero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black pt-10">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(111, 99, 140, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen">
          {/* Left Content - 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <NitrokitText />

              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white leading-tight">
                  The{" "}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                      Ultimate
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full"></div>
                  </span>{" "}
                  Terminal
                </h1>

                <p className="text-lg text-slate-300 leading-relaxed">
                  Experience the future of terminal computing with
                  <span className="text-white font-semibold">
                    {" "}
                    intelligent automation
                  </span>
                  ,
                  <span className="text-white font-semibold">
                    {" "}
                    lightning-fast performance
                  </span>
                  , and{" "}
                  <span className="text-white font-semibold">
                    zero-config setup
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <DownloadButton />
              <GithubButtonWithStats />
            </div>

            {/* Quick Install */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-400 font-mono text-sm">
                  Quick Install
                </span>
              </div>
              <Code className="text-sm">
                {`curl -sSL nitroterm.sh | bash && nitro init`}
              </Code>
            </div>
          </div>

          {/* Right Content - 7 columns */}
          <div className="lg:col-span-7">
            <div className="relative max-w-2xl mx-auto">
              {/* Main Terminal Window */}
              <div className="relative z-10">
                {/* Window Header */}
                <div className="bg-gray-900 rounded-t-2xl border border-gray-700 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-gray-400 font-mono text-sm">
                        nitroterm
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-green-400 text-xs font-mono">
                        CONNECTED
                      </span>
                    </div>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative border-x border-b border-gray-700 rounded-b-2xl overflow-hidden">
                  <Image
                    src="/screenshot/screenshot-v0.1.0-alpha.1.png"
                    alt="Nitroterm Terminal Interface"
                    width={700}
                    height={450}
                    className="w-full h-auto"
                    priority
                  />

                  {/* Interactive Overlays */}
                  <div className="absolute top-3 left-3 bg-purple-500/90 text-white px-2 py-1 rounded-full text-xs font-semibold animate-bounce">
                    🚀 Auto Release
                  </div>

                  <div className="absolute top-3 right-3 bg-blue-500/90 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    ⚡ Rust Speed
                  </div>

                  <div className="absolute bottom-3 left-3 bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    ✓ Zero Config
                  </div>
                </div>
              </div>

              {/* Floating Feature Cards - Küçültülmüş */}
              <div className="absolute -left-6 top-12 hidden xl:block z-20">
                <div className="bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-3 w-48 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-lg bg-purple-500 flex items-center justify-center">
                      <span className="text-white text-xs">📋</span>
                    </div>
                    <span className="text-purple-300 font-semibold text-xs">
                      Release Notes
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Auto-generated from commits
                  </p>
                </div>
              </div>

              <div className="absolute -right-6 top-20 hidden xl:block z-20">
                <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/30 rounded-xl p-3 w-48 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-lg bg-blue-500 flex items-center justify-center">
                      <span className="text-white text-xs">🔄</span>
                    </div>
                    <span className="text-blue-300 font-semibold text-xs">
                      Version Control
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Smart semantic versioning
                  </p>
                </div>
              </div>

              <div className="absolute -left-2 bottom-8 hidden xl:block z-20">
                <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-xl p-3 w-48 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-lg bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">🎯</span>
                    </div>
                    <span className="text-green-300 font-semibold text-xs">
                      Project Management
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">Workflow automation</p>
                </div>
              </div>

              {/* Background Glow - Küçültülmüş */}
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-green-600/20 rounded-2xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Strip */}
        <div className="py-12 border-t border-gray-800/50">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            {[
              { icon: "🦀", text: "Built with Rust" },
              { icon: "⚡", text: "Lightning Fast" },
              { icon: "🔒", text: "Memory Safe" },
              { icon: "🌍", text: "Cross Platform" },
              { icon: "🎨", text: "Beautiful UI" },
              { icon: "🔧", text: "Zero Config" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <span className="text-lg">{feature.icon}</span>
                <span className="text-sm text-white font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </div>
  );
};
