import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type H4Props = {
  children: ReactNode;
  className?: string;
};

const H4 = ({ children, className }: H4Props) => {
  return (
    <h4 className={cn("text-text-heading text-balance font-mono text-sm", className)}>
      {children}
    </h4>
  );
};

export { H4 };
