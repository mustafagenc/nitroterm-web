"use client";

import { useState, useEffect } from "react";
import {
  FaDownload,
  FaWindows,
  FaApple,
  FaLinux,
  FaChevronDown,
} from "react-icons/fa6";

interface OSInfo {
  name: string;
  icon: React.ReactNode;
  downloadUrl: string;
  fileName: string;
  subVersions?: OSInfo[];
}

const osConfig: Record<string, OSInfo> = {
  windows: {
    name: "Windows",
    icon: <FaWindows className="w-5 h-5" />,
    downloadUrl:
      "https://github.com/mustafagenc/nitrokit-terminal/releases/download/v0.1.0-alpha.1/nitrokit-windows-x86_64.exe",
    fileName: "nitrokit-windows.exe",
  },
  macos: {
    name: "macOS",
    icon: <FaApple className="w-5 h-5" />,
    downloadUrl:
      "https://github.com/mustafagenc/nitrokit-terminal/releases/download/v0.1.0-alpha.1/nitrokit-macos-arm64",
    fileName: "nitrokit-macos-arm64",
    subVersions: [
      {
        name: "macOS (Apple Silicon)",
        icon: <FaApple className="w-4 h-4" />,
        downloadUrl:
          "https://github.com/mustafagenc/nitrokit-terminal/releases/download/v0.1.0-alpha.1/nitrokit-macos-arm64",
        fileName: "nitrokit-macos-arm64",
      },
      {
        name: "macOS (Intel)",
        icon: <FaApple className="w-4 h-4" />,
        downloadUrl:
          "https://github.com/mustafagenc/nitrokit-terminal/releases/download/v0.1.0-alpha.1/nitrokit-linux-x86_64",
        fileName: "nitrokit-macos-x64",
      },
    ],
  },
  linux: {
    name: "Linux",
    icon: <FaLinux className="w-5 h-5" />,
    downloadUrl:
      "https://github.com/mustafagenc/nitrokit-terminal/releases/latest/download/nitrokit-linux",
    fileName: "nitrokit-linux",
  },
};

function detectOS(): string {
  if (typeof window === "undefined") return "linux";

  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) return "windows";
  if (userAgent.includes("mac")) return "macos";
  if (userAgent.includes("linux")) return "linux";

  return "linux";
}

export default function DownloadButton({
  className = "",
  variant = "primary",
}: {
  className?: string;
  variant?: "primary" | "secondary";
}) {
  const [os, setOs] = useState<string>("linux");
  const [isLoading, setIsLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setOs(detectOS());
    setIsLoading(false);
  }, []);

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

  const baseClasses =
    "inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl",
    secondary:
      "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 hover:border-slate-600",
  };

  if (isLoading) {
    return (
      <button
        disabled
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        <FaDownload className="w-5 h-5 animate-pulse" />
        <span>Loading...</span>
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={handleMainDownload}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        title={`Download for ${currentOS.name}`}
      >
        {currentOS.icon}
        <span>Download for {currentOS.name}</span>
        {currentOS.subVersions ? (
          <FaChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              showDropdown ? "rotate-180" : ""
            }`}
          />
        ) : (
          <FaDownload className="w-4 h-4" />
        )}
      </button>

      {/* Dropdown Menu for macOS versions */}
      {currentOS.subVersions && showDropdown && (
        <div className="absolute top-full left-0 mt-2 w-full bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50">
          {currentOS.subVersions.map((subVersion, index) => (
            <button
              key={index}
              onClick={() => handleSubDownload(subVersion)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left text-white hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {subVersion.icon}
              <span className="flex-1">{subVersion.name}</span>
              <FaDownload className="w-3 h-3 text-slate-400" />
            </button>
          ))}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {showDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowDropdown(false)}
        />
      )}
    </div>
  );
}
