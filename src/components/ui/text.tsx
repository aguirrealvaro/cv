import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type TextProps = {
  children: ReactNode;
  className?: string;
};

const Text = ({ children, className }: TextProps) => {
  return (
    <p className={cn("text-pretty font-mono text-text-primary text-sm", className)}>
      {children}
    </p>
  );
};

export { Text };
