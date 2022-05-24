import React from 'react';

import MobileDivider from '../../assets/images/pattern-divider-mobile.svg';
import DesktopDivider from '../../assets/images/pattern-divider-desktop.svg';

function Divider() {
  return (
    <picture>
      <source srcSet={DesktopDivider} media="(min-width: 600px)" />
      <img src={MobileDivider} alt="divider" />
    </picture>
  );
}

export default Divider;
