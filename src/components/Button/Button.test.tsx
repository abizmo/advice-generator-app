import React from 'react';
import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';

import Button from './Button';
import { ReactComponent as Dice } from '../../assets/icon/dice.svg';

let handleClick: jest.Mock<any, any>;
let button: Node;

beforeEach(() => {
  handleClick = jest.fn();
  render(<Button icon={Dice} onClick={handleClick} />);
  button = screen.getByRole('button');
});

afterEach(() => {
  cleanup();
});

test('should render the button', () => {
  expect(button).toBeInTheDocument();
});

test('should call function when clicked', () => {
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
