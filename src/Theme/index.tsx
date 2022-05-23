import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.palette.common[900]};
    color: ${theme.palette.primary.contrast};
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
