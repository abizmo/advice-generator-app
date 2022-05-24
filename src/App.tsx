import React from 'react';

import { ReactComponent as Dice } from './assets/icon/dice.svg';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Theme from './Theme';

function App() {
  return (
    <Theme>
      <div>
        <h1>Advice #117</h1>

        <p>
          Qui elit cillum cillum Lorem qui excepteur ex elit enim exercitation ullamco
          nisi nostrud deserunt. Elit duis laborum commodo ut exercitation commodo.
        </p>
        <Button icon={Dice} onClick={() => { }} />

        <Footer />
      </div>
    </Theme>
  );
}

export default App;
