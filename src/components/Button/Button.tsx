import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  icon: React.ElementType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Btn = styled.button.attrs({ type: 'button' })(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: 'none',
  borderRadius: theme.borderRadius.round,
  display: 'grid',
  height: theme.sizes[64],
  placeContent: 'center',
  width: theme.sizes[64],
  '&:hover': {
    boxShadow: `0 0 ${theme.sizes[24]} 0 ${theme.palette.primary.main}`,
    cursor: 'pointer',
  },
}));

function Button({ icon: Icon, onClick }: ButtonProps): JSX.Element {
  return (
    <Btn onClick={onClick}>
      <Icon />
    </Btn>
  );
}

export default Button;
