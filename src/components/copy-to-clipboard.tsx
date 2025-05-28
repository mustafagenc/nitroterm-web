"use client";

import { HiOutlineClipboardCopy } from "react-icons/hi";
import { toast } from "sonner";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

export default function CopyToClipboard({ code }: { code: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      toast("Copied to clipboard", {
        duration: 2000,
      });
    } catch (error) {
      console.error("Error copying to clipboard", error);
    } finally {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="absolute top-0 right-0 p-2 text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
    >
      {isCopied ? (
        <FaCheck
          size={16}
          className="text-green-500"
          data-testid="check-icon"
        />
      ) : (
        <HiOutlineClipboardCopy size={16} data-testid="clipboard-icon" />
      )}
    </button>
  );
}
