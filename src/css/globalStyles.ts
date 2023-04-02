import { createGlobalStyle } from "styled-components";
import { ThemeType, theme } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fontFamily};
    font-size: 16px;
    color: ${theme.colors.black};
  }

  img {
    max-width: 100%;
  }

  button {
    padding: 0;
    font: inherit;
    color: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
