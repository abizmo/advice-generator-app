import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'UI/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export function Primary(): JSX.Element {
  return <Footer />;
}
