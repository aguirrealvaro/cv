import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "@/css";

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
