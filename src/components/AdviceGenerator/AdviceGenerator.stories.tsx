import React from 'react';
import { ComponentMeta } from '@storybook/react';

import AdviceGenerator from './AdviceGenerator';

export default {
  title: 'Components/AdviceGenerator',
  component: AdviceGenerator,
} as ComponentMeta<typeof AdviceGenerator>;

export function Default(): JSX.Element {
  return <AdviceGenerator />;
}
