import styled from 'styled-components';

export const Wrapper = styled.main(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.common[700],
  borderRadius: theme.borderRadius[700],
  display: 'flex',
  flexDirection: 'column',
  gap: theme.sizes[24],
  margin: '0 auto',
  width: '100%',
  maxWidth: '34rem',
  paddingBottom: theme.sizes[64],
  paddingInline: theme.sizes[24],
  paddingTop: theme.sizes[40],
  position: 'relative',
  textAlign: 'center',
  '& > button': {
    position: 'absolute',
    bottom: 0,
    transform: 'translateY(50%)',
  },
}));

export const Title = styled.h1(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.fontSize[200],
  letterSpacing: '.34rem',
  textTransform: 'uppercase',
}));

export const Body = styled.p(({ theme }) => ({
  color: theme.palette.primary.contrast,
  fontSize: theme.fontSize[600],
}));
