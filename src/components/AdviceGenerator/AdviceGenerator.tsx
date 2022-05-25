import React from 'react';

import { ReactComponent as Dice } from '../../assets/icon/dice.svg';
import useAdvice from '../../hooks/useAdvice';
import Button from '../Button/Button';
import Divider from '../Divider/Divider';
import { Body, Title, Wrapper } from './AdviceGenerator.style';

function AdviceGenerator(): JSX.Element {
  const [advice, refreshAdvice] = useAdvice();

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

      <Button icon={Dice} onClick={() => refreshAdvice()} />
    </Wrapper>
  );
}

export default AdviceGenerator;
