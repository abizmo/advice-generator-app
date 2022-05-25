import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body, h1, h2, h3, p, ul {
    margin: 0;
    padding: 0;
  }

  'h1, h2, h3': {
    font-weight: 500;
    line-height: 1.1;
  }

  body {
    background-color: ${theme.palette.common[900]};
    color: ${theme.palette.primary.contrast};
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    height: 100vh;
  }

  #root {
    display: grid;
    grid-template-rows: 1fr min-content;
    height: 100vh;
    padding: 1rem;
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
