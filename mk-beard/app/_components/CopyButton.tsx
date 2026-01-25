"use client";

import { Toaster } from "./ui/sonner";
import { Button } from "./ui/button";
import { toast } from "sonner";
import Form from "next/form";

interface CopyButtonProps {
  text: string;
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(text);
      toast.success("Texto copiado!");
    } catch (error) {
      toast.error("Falha ao copiar o texto: " + (error as Error).message);
    }
  };

  return (
    <Form action={handleCopy}>
      <Button
        type="submit"
        className="border-border text-foreground bg-background hover:bg-background rounded-full border border-solid px-4 py-2 text-sm leading-[1.4] font-bold"
      >
        Copiar
      </Button>
      <Toaster />
    </Form>
  );
};

export default CopyButton;
