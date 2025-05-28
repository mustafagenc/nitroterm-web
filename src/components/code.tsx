"use client";

import Prism from "prismjs";
import "prismjs/components/prism-bash";
import { useEffect } from "react";
import CopyToClipboard from "./copy-to-clipboard";
import { cn } from "@lib/utils";

export default function Code({
  children,
  className,
  ...props
}: Readonly<{
  className?: string;
  children: string;
}>) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="relative">
      <CopyToClipboard code={children} />
      <pre className={cn("language-bash", className)} tabIndex={0} {...props}>
        <code className="language-bash">{children}</code>
      </pre>
    </div>
  );
}
