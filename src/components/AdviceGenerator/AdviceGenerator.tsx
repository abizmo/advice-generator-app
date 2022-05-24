import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Dice } from '../../assets/icon/dice.svg';
import { getAdvice } from '../../services/advices';
import { Advice } from '../../types/advices';
import Button from '../Button/Button';
import Divider from '../Divider/Divider';

const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.common[700]};
  border-radius: ${({ theme }) => theme.borderRadius[700]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes[24]};
  margin: 0 auto;
  max-width: 34rem;
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

const initialState: Advice = {};

function AdviceGenerator() {
  const [advice, setAdvice] = useState(initialState);

  useEffect(() => {
    getAdvice()
      .then((data) => setAdvice(data));
  }, []);

  const handleClick = async () => {
    getAdvice()
      .then((data) => setAdvice(data));
  };

  return (
    <Wrapper>
      <Title>
        Advice #
        {advice.id}
      </Title>

      <Body>
        {advice.advice}
      </Body>

      <Divider />

      <Button icon={Dice} onClick={handleClick} />
    </Wrapper>
  );
}

export default AdviceGenerator;
