import { render, screen } from '@testing-library/react';
import React from 'react';
import Theme from '../../Theme';

import AdviceGenerator from './AdviceGenerator';

test('should render and got header', () => {
  render(
    <Theme>
      <AdviceGenerator />
    </Theme>,
  );

  expect(screen.getByText(/advice #\d*/i)).toBeInTheDocument();
  expect(screen.getByAltText('divider')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});
