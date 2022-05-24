import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap");

  body {
    background-color: ${theme.palette.common[900]};
    color: ${theme.palette.primary.contrast};
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
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
