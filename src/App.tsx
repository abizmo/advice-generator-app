import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Dice } from './assets/icon/dice.svg';
import Button from './components/Button/Button';
import Theme from './Theme';

const Footer = styled.footer`
  font-size: 11px;
  text-align: center;
  & a {
    color: hsl(228, 45%, 44%);
  }
`;

function App() {
  return (
    <Theme>
      <div>
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
      </div>
    </Theme>
  );
}

export default App;
