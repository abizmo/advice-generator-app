import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { ReactComponent as Dice } from './assets/icon/dice.svg';
import Button from './components/Button/Button';
import { GlobalStyle } from './GlobalStyle';
import theme from './GlobalStyle/theme';

const Footer = styled.footer`
  font-size: 11px;
  text-align: center;
  & a {
    color: hsl(228, 45%, 44%);
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Advice #117</h1>

      <p>
        Qui elit cillum cillum Lorem qui excepteur ex elit enim exercitation ullamco
        nisi nostrud deserunt. Elit duis laborum commodo ut exercitation commodo.
      </p>
      <Button icon={Dice} onClick={() => {}} />

      <Footer>
        Challenge by
        {' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>
        .
        Coded by
        {' '}
        <a href="https://www.abizmo.dev">Abián Izquierdo</a>
        .
      </Footer>
    </ThemeProvider>
  );
}

export default App;
