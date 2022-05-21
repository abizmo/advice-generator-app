import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Button from './Button';
import { ReactComponent as Dice } from '../../assets/icon/dice.svg';

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export function Primary(): JSX.Element {
  return <Button icon={Dice} onClick={() => {}} />;
}
