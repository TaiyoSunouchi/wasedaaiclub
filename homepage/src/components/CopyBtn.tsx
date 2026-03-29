"use client";

import { useState } from "react";

export default function CopyBtn() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("waseda.ai.club@gmail.com");
    } catch {
      const el = document.createElement("input");
      el.value = "waseda.ai.club@gmail.com";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="shrink-0 text-xs border border-blue-500 text-blue-600 rounded-lg px-3 py-1.5 font-semibold hover:bg-blue-50 transition-colors"
    >
      {copied ? "コピー完了！" : "コピー"}
    </button>
  );
}
