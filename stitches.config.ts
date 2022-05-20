import { createStitches } from '@stitches/react';
import {
  gray,
  blue,
  red,
  purple,
  green,
  grayDark,
  blueDark,
  redDark,
  purpleDark,
  greenDark,
} from '@radix-ui/colors';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      appBackground: '#fff',
      ...gray,
      ...blue,
      ...red,
      ...purple,
      ...green,
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});

export const darkTheme = createTheme({
  colors: {
    appBackground: grayDark.gray1,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...purpleDark,
    ...greenDark,
  },
});

export const GlobalStyles = globalCss({
  body: {
    background: '$appBackground',
  },
});
