import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type H3Props = {
  children: ReactNode;
  className?: string;
};

const H3 = ({ children, className }: H3Props) => {
  return (
    <h3 className={cn("text-lg font-bold text-text-heading text-balance", className)}>
      {children}
    </h3>
  );
};

export { H3 };
