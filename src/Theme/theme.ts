const theme = {
  borderRadius: {
    500: '.25rem',
    700: '.75rem',
    round: '50%',
  },
  fontSize: {
    100: '.6875rem',
    200: 'clamp(.6875rem, .25rem + 1.7vw, .8125rem)',
    500: '1rem',
    600: 'clamp(1.5rem, .85rem + 2.5vw, 1.75rem)',
  },
  palette: {
    common: {
      500: 'hsl(217, 19%, 38%)',
      700: 'hsl(217, 19%, 24%)',
      900: 'hsl(218, 23%, 16%)',
    },
    primary: {
      contrast: 'hsl(193, 38%, 86%)',
      main: 'hsl(150, 100%, 66%)',
    },
  },
  sizes: {
    1: '.0625rem',
    2: '.125rem',
    4: '.25rem',
    8: '.5rem',
    12: '.75rem',
    16: '1rem',
    24: '1.5rem',
    32: '2rem',
    40: '2.5rem',
    48: '3rem',
    56: '3.5rem',
    64: '4rem',
  },
};

export default theme;
