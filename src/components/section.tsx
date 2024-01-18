import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProps) => {
  return <div className={cn("mb-8", className)}>{children}</div>;
};

export { Section };
