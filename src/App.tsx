import React from 'react';

import AdviceGenerator from './components/AdviceGenerator/AdviceGenerator';
import Footer from './components/Footer/Footer';
import Theme from './Theme';

function App() {
  return (
    <Theme>
      <AdviceGenerator />
      <Footer />
    </Theme>
  );
}

export default App;
