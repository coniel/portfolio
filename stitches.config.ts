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
    radii: {
      xs: '3px' /* popovers, menus */,
      sm: '4px' /* badges, tags */,
      md: '6px' /* buttons, nav items */,
      lg: '8px' /* cards, drops */,
      xl: '10px' /* dialogs */,
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
