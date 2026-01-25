"use client";

import { useState } from "react";
import { Button } from "./ui/button";

interface CopyButtonProps {
  text: string;
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      className="border-border text-foreground bg-background hover:bg-background rounded-full border border-solid px-4 py-2 text-sm leading-[1.4] font-bold"
    >
      {copied ? "Copiado" : "Copiar"}
    </Button>
  );
};

export default CopyButton;
