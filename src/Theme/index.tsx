import React from 'react';
import { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import theme from './theme';

const resetCss = css`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body, h1, p {
    margin: 0;
    padding: 0;
  }

  h1 {
    line-height: 1.1;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${resetCss}

  body {
    background-color: ${theme.palette.common[900]};
    color: ${theme.palette.primary.contrast};
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    line-height: 1.5;
    height: 100vh;
  }

  #root {
    display: grid;
    grid-template-rows: 1fr min-content;
    height: 100vh;
    padding: ${theme.sizes[16]};
  }

  main {
    place-self: center;
  }
`;

// eslint-disable-next-line react/prop-types
function Theme({ children }: any): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
