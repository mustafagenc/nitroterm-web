"use client";

import { GITHUB_URL } from "@lib/constants";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { useGitHubStats } from "@/hooks/useGithubStats";

export const GithubButtonWithStats = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { stats, loading, error, formatNumber } = useGitHubStats(GITHUB_URL);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-4 border border-white/30 bg-black/40 text-white hover:bg-black/60 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm shadow-lg"
      >
        <FaGithub size={30} className="text-white" />
        <span className="text-white">GitHub</span>
        <div className="flex items-center gap-3">
          {loading ? (
            <>
              <div className="flex items-center gap-1 px-2 py-1 bg-white/20 rounded-full">
                <FaStar size={12} className="text-white/80" />
                <span className="text-xs animate-pulse text-white/80">...</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-white/20 rounded-full">
                <FaCodeBranch size={12} className="text-white/80" />
                <span className="text-xs animate-pulse text-white/80">...</span>
              </div>
            </>
          ) : stats && !error ? (
            <>
              <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/90 rounded-full border border-yellow-400/50 shadow-sm">
                <FaStar size={12} className="text-yellow-100" />
                <span className="text-xs font-medium text-yellow-100">
                  {formatNumber(stats.stargazers_count)}
                </span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/90 rounded-full border border-blue-400/50 shadow-sm">
                <FaCodeBranch size={12} className="text-blue-100" />
                <span className="text-xs font-medium text-blue-100">
                  {formatNumber(stats.forks_count)}
                </span>
              </div>
            </>
          ) : null}
        </div>
        <svg
          className={`w-4 h-4 transition-transform duration-200 text-white/90 ${
            isOpen ? "transform rotate-180" : ""
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
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md border border-white/30 rounded-lg shadow-xl z-50 overflow-hidden">
          <button
            onClick={() => handleMenuClick(`${GITHUB_URL}/stargazers`)}
            className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-white/80 transition-colors border-b border-gray-200/50"
          >
            <FaStar className="text-yellow-600" size={16} />
            <div className="flex-1 text-left">
              <div className="font-medium">Star Repository</div>
              <div className="text-sm text-gray-600">Show your support</div>
            </div>
            <div className="flex items-center gap-2">
              {loading ? (
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-600 animate-pulse">
                  ...
                </div>
              ) : stats ? (
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-300">
                  <FaStar className="w-3 h-3 mr-1" />
                  {formatNumber(stats.stargazers_count)}
                </div>
              ) : null}
              <FaExternalLinkAlt className="text-gray-500" size={12} />
            </div>
          </button>
          <button
            onClick={() => handleMenuClick(`${GITHUB_URL}/fork`)}
            className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-white/80 transition-colors border-b border-gray-200/50"
          >
            <FaCodeBranch className="text-blue-600" size={16} />
            <div className="flex-1 text-left">
              <div className="font-medium">Fork Repository</div>
              <div className="text-sm text-gray-600">Create your own copy</div>
            </div>
            <div className="flex items-center gap-2">
              {loading ? (
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-600 animate-pulse">
                  ...
                </div>
              ) : stats ? (
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-300">
                  <FaCodeBranch className="w-3 h-3 mr-1" />
                  {formatNumber(stats.forks_count)}
                </div>
              ) : null}
              <FaExternalLinkAlt className="text-gray-500" size={12} />
            </div>
          </button>
          <button
            onClick={() => handleMenuClick(GITHUB_URL)}
            className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-white/80 transition-colors"
          >
            <FaGithub className="text-gray-700" size={16} />
            <div className="flex-1 text-left">
              <div className="font-medium">View Repository</div>
              <div className="text-sm text-gray-600">Browse source code</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-300">
                <FaGithub className="w-3 h-3 mr-1" />
                View
              </div>
              <FaExternalLinkAlt className="text-gray-500" size={12} />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default GithubButtonWithStats;
