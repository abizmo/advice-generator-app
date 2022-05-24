import React from 'react';
import { render } from '@testing-library/react';

import Footer from './Footer';
import Theme from '../../Theme';

test('should render and MatchSnapshot', () => {
  const { asFragment } = render(
    <Theme>
      <Footer />
    </Theme>,
  );

  expect(asFragment()).toMatchSnapshot();
});
