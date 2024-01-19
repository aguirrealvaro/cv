import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProps) => {
  return <section className={cn("flex flex-col gap-2", className)}>{children}</section>;
};

export { Section };
