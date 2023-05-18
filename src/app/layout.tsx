import { FunctionComponent, ReactNode } from "react";
import { Metadata } from "next";
import { InnerLayout } from "@/components";
import StyledComponentsRegistry from "@/css/registry";

export const metadata: Metadata = {
  title: "CV | Alvaro Aguirre",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <InnerLayout>{children}</InnerLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
