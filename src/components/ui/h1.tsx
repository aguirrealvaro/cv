import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type H1Props = {
  children: ReactNode;
  className?: string;
};

const H1 = ({ children, className }: H1Props) => {
  return (
    <h1 className={cn("text-balance text-2xl font-bold text-text-heading", className)}>
      {children}
    </h1>
  );
};

export { H1 };
