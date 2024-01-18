import "@/styles/globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ErrorBoundary } from "@/components";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Aguirre Alvaro | Frontend Developer",
};

type RootLayoutProps = {
  children: ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-bg-primary text-text-primary antialiased",
          `${inter.variable} font-body`
        )}
      >
        <ErrorBoundary>
          <div className="flex h-dvh flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
};

export default RootLayout;
