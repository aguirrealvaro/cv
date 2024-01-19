import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type H2Props = {
  children: ReactNode;
  className?: string;
};

const H2 = ({ children, className }: H2Props) => {
  return (
    <h2 className={cn("text-balance text-xl font-bold text-text-heading", className)}>
      {children}
    </h2>
  );
};

export { H2 };
