import { ReactNode } from "react";
import { Button } from "./button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const PageContainer = ({ children }: { children: ReactNode }) => {
  return <div className="space-y-6 p-5">{children}</div>;
};

export const PageSectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-foreground mb-3 text-xs font-bold uppercase">
      {children}
    </h2>
  );
};

export const PageSection = ({ children }: { children: ReactNode }) => {
  return <div className="space-y-3">{children}</div>;
};

export const PageSectionScroller = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  );
};

export const PageHeroImage = ({
  children,
  backHref = "/",
}: {
  children: ReactNode;
  backHref?: string;
}) => (
  <div className="relative h-[297px] w-full">
    {children}
    <Button
      size="icon"
      variant="secondary"
      className="absolute top-4 left-4 z-10 rounded-full"
      asChild
    >
      <Link href={backHref}>
        <ChevronLeft className="h-6 w-6" />
      </Link>
    </Button>
  </div>
);

export const PageContentCard = ({ children }: { children: ReactNode }) => (
  <div className="bg-background relative -mt-6 rounded-t-3xl px-5 py-5 pb-6">
    {children}
  </div>
);

export const PageEntityHeader = ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
);

export const PageEntityTitle = ({ children }: { children: ReactNode }) => (
  <div className="flex gap-2">{children}</div>
);

export const PageEntitySubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-muted-foreground">{children}</p>
);

export const PageTextContent = ({ children }: { children: ReactNode }) => (
  <p className="text-sm leading-relaxed">{children}</p>
);

export const PhoneDisplay = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center justify-between">{children}</div>
);

export const PhoneDisplayInfo = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-[10px]">{children}</div>
);

export const PhoneDisplayNumber = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground text-sm leading-[1.4]">{children}</span>
);
