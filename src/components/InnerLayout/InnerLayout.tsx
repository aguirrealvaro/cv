"use client";

import { FunctionComponent, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "@/css";

type InnerLayoutProps = {
  children: ReactNode;
};

export const InnerLayout: FunctionComponent<InnerLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};
