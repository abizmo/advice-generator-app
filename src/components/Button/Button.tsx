import React from 'react';

type ButtonProps = { label?: string };

function Button({ label }: ButtonProps): JSX.Element {
  return <button type="button">{label}</button>;
}

Button.defaultProps = {
  label: 'click me',
};

export default Button;
