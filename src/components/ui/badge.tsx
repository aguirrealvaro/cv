import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "text-nowrap rounded-md px-2 py-0.5 font-mono text-xs font-semibold",
        "bg-neutral-200 dark:bg-neutral-700",
        "text-neutral-700 dark:text-neutral-200",
        className
      )}
    >
      {children}
    </span>
  );
};

export { Badge };
