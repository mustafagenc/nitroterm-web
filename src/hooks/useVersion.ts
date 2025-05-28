"use client";

import { useState, useEffect } from "react";

export function useVersion() {
  const [version, setVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVersion() {
      try {
        setLoading(true);
        const response = await fetch("/api/version");

        if (!response.ok) {
          throw new Error("Failed to fetch version");
        }

        const data = await response.json();
        setVersion(data.version);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setVersion(null);
      } finally {
        setLoading(false);
      }
    }

    fetchVersion();
  }, []);

  return { version, loading, error };
}
