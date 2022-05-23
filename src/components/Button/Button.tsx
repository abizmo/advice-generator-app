import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  icon: React.ElementType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Btn = styled.button.attrs({ type: 'button' })`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  display: grid;
  height: ${({ theme }) => theme.sizes[64]};
  place-content: center;
  width: ${({ theme }) => theme.sizes[64]};

  &:hover {
    box-shadow: 0 0 16px 0 ${({ theme }) => theme.palette.primary.main};
  }
`;

function Button({ icon: Icon, onClick }: ButtonProps): JSX.Element {
  return (
    <Btn onClick={onClick}>
      <Icon />
    </Btn>
  );
}

export default Button;
