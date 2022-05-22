import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`
  background-color: ${({ theme }) => theme.palette.common[900]};
  color: ${({ theme }) => theme.palette.primary.contrast}
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;
