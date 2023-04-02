import { createGlobalStyle } from "styled-components";
import { ThemeType, theme } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  @font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway/Raleway-Regular.ttf");
    font-weight: 400;
  }

  @font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway/Raleway-Medium.ttf");
    font-weight: 500;
  }

  @font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway/Raleway-SemiBold.ttf");
    font-weight: 600;
  }

  @font-face {
    font-family: "Raleway";
    src: url("/fonts/Raleway/Raleway-Bold.ttf");
    font-weight: 700;
  }

  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.typography.fontFamilies.body};
    font-size: 16px;
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
