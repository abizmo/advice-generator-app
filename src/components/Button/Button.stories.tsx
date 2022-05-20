import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export function Primary(): JSX.Element {
  return <Button />;
}
