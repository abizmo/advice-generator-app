import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  font-size: ${({ theme }) => theme.fontSize[100]};
  font-weight: 400;
  text-align: center;

  & a {
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 700;
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <Wrapper>
      Challenge by
      {' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>
      .
      Coded by
      {' '}
      <a href="https://www.abizmo.dev">Abián Izquierdo</a>
      .
    </Wrapper>
  );
}

export default Footer;
