import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  icon: React.ElementType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Btn = styled.button.attrs({ type: 'button' })`
  aspect-ratio: 1 / 1;
  background-color: hsl(150, 100%, 66%);
  border: none;
  border-radius: 50%;
  display: grid;
  place-content: center;
  width: 64px;
`;

function Button({ icon: Icon, onClick }: ButtonProps): JSX.Element {
  return (
    <Btn onClick={onClick}>
      <Icon />
    </Btn>
  );
}

export default Button;
