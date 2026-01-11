import { ReactNode } from "react";

export const PageContainer = ({ children }: { children: ReactNode }) => {
  return <div className="space-y-6 p-5">{children}</div>;
};

export const PageSectionTitle = ({ children }: { children: string }) => {
  return (
    <h2 className="text-foreground text-xs font-semibold uppercase">
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
