// src/components/client-version.tsx
"use client";

import { useVersion } from "@/hooks/useVersion";

export default function ClientVersion() {
  const { version, loading, error } = useVersion();

  if (loading) {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 animate-pulse">
        Loading...
      </span>
    );
  }

  if (error || !version) {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
        Version error
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
      v{version}
    </span>
  );
}
