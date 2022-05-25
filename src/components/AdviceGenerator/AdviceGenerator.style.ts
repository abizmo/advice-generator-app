import styled from 'styled-components';

export const Wrapper = styled.main`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.common[700]};
  border-radius: ${({ theme }) => theme.borderRadius[700]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes[24]};
  margin: 0 auto;
  width: 100%;
  max-width: 34rem;
  padding: 2.5rem 1.5rem 4rem;
  position: relative;

  & > button {
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: .6875rem;
  letter-spacing: .34rem;
  text-align: center;
  text-transform: uppercase;
`;

export const Body = styled.p`
  color: ${({ theme }) => theme.palette.primary.contrast};
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
`;