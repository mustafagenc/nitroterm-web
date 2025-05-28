// src/components/download-button.tsx
"use client";

import { useVersion } from "@/hooks/useVersion";
import { useState, useEffect, useRef } from "react";
import {
  FaDownload,
  FaWindows,
  FaApple,
  FaLinux,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface OSInfo {
  name: string;
  icon: React.ReactNode;
  downloadUrl: string;
  fileName: string;
  subVersions?: OSInfo[];
}

function detectOS(): string {
  if (typeof window === "undefined") return "linux";

  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) return "windows";
  if (userAgent.includes("mac")) return "macos";
  if (userAgent.includes("linux")) return "linux";

  return "linux";
}

export default function DownloadButton() {
  const { version, loading, error } = useVersion();
  const [os, setOs] = useState<string>("linux");
  const [isLoading, setIsLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOs(detectOS());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading || error) {
    return (
      <button
        disabled
        className="flex items-center gap-4 border border-white/30 bg-black/40 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm shadow-lg opacity-50"
      >
        <FaDownload size={30} className="text-white animate-pulse" />
        <span>Loading...</span>
      </button>
    );
  }

  const osConfig: Record<string, OSInfo> = {
    windows: {
      name: "Windows",
      icon: <FaWindows className="text-blue-400" size={16} />,
      downloadUrl: `https://github.com/mustafagenc/nitroterm/releases/download/${version}/nitroterm-windows-x86_64.exe`,
      fileName: "nitroterm-windows.exe",
    },
    macos: {
      name: "macOS",
      icon: <FaApple className="text-gray-300" size={16} />,
      downloadUrl: `https://github.com/mustafagenc/nitroterm/releases/download/${version}/nitroterm-macos-arm64`,
      fileName: "nitroterm-macos-arm64",
      subVersions: [
        {
          name: "macOS (Apple Silicon)",
          icon: <FaApple className="text-gray-700" size={16} />,
          downloadUrl: `https://github.com/mustafagenc/nitroterm/releases/download/${version}/nitroterm-macos-arm64`,
          fileName: "nitroterm-macos-arm64",
        },
        {
          name: "macOS (Intel)",
          icon: <FaApple className="text-gray-700" size={16} />,
          downloadUrl: `https://github.com/mustafagenc/nitroterm/releases/download/${version}/nitroterm-linux-x86_64`,
          fileName: "nitroterm-macos-x64",
        },
      ],
    },
    linux: {
      name: "Linux",
      icon: <FaLinux className="text-orange-400" size={16} />,
      downloadUrl: `https://github.com/mustafagenc/nitroterm/releases/download/${version}/nitrokit-linux-x86_64`,
      fileName: "nitroterm-linux",
    },
  };

  const currentOS = osConfig[os];

  const handleMainDownload = () => {
    if (currentOS.subVersions) {
      setShowDropdown(!showDropdown);
    } else {
      window.open(currentOS.downloadUrl, "_blank");
    }
  };

  const handleSubDownload = (subVersion: OSInfo) => {
    window.open(subVersion.downloadUrl, "_blank");
    setShowDropdown(false);
  };

  if (isLoading) {
    return (
      <button
        disabled
        className="flex items-center gap-4 border border-white/30 bg-black/40 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm shadow-lg opacity-50"
      >
        <FaDownload size={30} className="text-white animate-pulse" />
        <span>Loading...</span>
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main Download Button with animated icon */}
      <button
        onClick={handleMainDownload}
        className="group flex items-center gap-4 border border-white/30 bg-black/40 text-white hover:bg-black/60 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm shadow-lg"
        title={`Download for ${currentOS.name}`}
      >
        <FaDownload
          size={30}
          className="text-white group-hover:animate-bounce transition-all duration-300"
        />
        <span className="text-white">Download for {currentOS.name}</span>

        <svg
          className={`w-4 h-4 transition-transform duration-200 text-white/90 ${
            showDropdown ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {currentOS.subVersions && showDropdown && (
        <div className="absolute top-full left-0 mt-2 w-84 bg-white/95 backdrop-blur-md border border-white/30 rounded-lg shadow-xl z-50 overflow-hidden">
          {currentOS.subVersions.map((subVersion, index) => (
            <button
              key={index}
              onClick={() => handleSubDownload(subVersion)}
              className={`cursor-pointer w-full flex items-center gap-4 px-4 py-3 text-gray-800 hover:bg-white/80 transition-colors ${
                index < currentOS.subVersions!.length - 1
                  ? "border-b border-gray-200/50"
                  : ""
              }`}
            >
              {subVersion.icon}
              <div className="flex-1 text-left min-w-0">
                <div className="font-medium text-gray-900">
                  {subVersion.name}
                </div>
                {version && (
                  <div className="text-xs text-gray-500 mt-0.5">
                    Version {version}
                  </div>
                )}
              </div>
              <FaExternalLinkAlt
                className="text-gray-500 flex-shrink-0"
                size={12}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
