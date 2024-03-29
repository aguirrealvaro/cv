import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return <div className={cn("mx-auto w-11/12 max-w-[40rem]", className)}>{children}</div>;
};

export { Wrapper };
