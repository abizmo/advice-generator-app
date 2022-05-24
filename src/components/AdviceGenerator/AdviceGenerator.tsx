import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Dice } from '../../assets/icon/dice.svg';
import Button from '../Button/Button';
import Divider from '../Divider/Divider';

const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.common[700]};
  border-radius: ${({ theme }) => theme.borderRadius[700]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes[24]};
  padding: 2.5rem 1.5rem 4rem;
  position: relative;

  & > button {
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: .6875rem;
  font-weight: 700;
  letter-spacing: .34rem;
  text-align: center;
  text-transform: uppercase;
`;

const Body = styled.p`
  color: ${({ theme }) => theme.palette.primary.contrast};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
`;

function AdviceGenerator() {
  return (
    <Wrapper>
      <Title>Advice #117</Title>

      <Body>
        Qui elit cillum cillum Lorem qui excepteur ex elit enim exercitation ullamco
        nisi nostrud deserunt. Elit duis laborum commodo ut exercitation commodo.
      </Body>

      <Divider />

      <Button icon={Dice} onClick={() => { }} />
    </Wrapper>
  );
}

export default AdviceGenerator;
