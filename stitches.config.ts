import { createStitches } from '@stitches/react';
import {
  gray,
  blue,
  red,
  violet,
  green,
  grayDark,
  blueDark,
  redDark,
  violetDark,
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
      ...gray,
      ...blue,
      ...red,
      ...violet,
      ...green,
      appBackground: '#fff',
      text: gray.gray12,
      backgroundProjects:
        'radial-gradient(100% 239.75% at 0% 0%, #E4F9FF 0%, rgba(239, 254, 250, 0.5625) 56.25%, rgba(253, 250, 255, 0) 100%)',
      backgroundToolkit:
        'url("shapes-large-light.svg"), linear-gradient(180deg, #F2F6F9 0%, #FFFFFF 100%)',
      backgroundProcess:
        'radial-gradient(100% 239.75% at 0% 0%, rgba(228, 222, 252, 0.3) 0%, rgba(249, 229, 249, 0.15) 42.71%, rgba(206, 231, 254, 0.5) 100%)',
      backgroundContact: 'linear-gradient(180deg, #F2F9F9 0%, #FFFFFF 100%)',
      backgroundTransparent: 'rgba(255, 255, 255, 0.4)',
    },
    radii: {
      xs: '3px' /* popovers, menus */,
      sm: '4px' /* badges, tags */,
      md: '6px' /* buttons, nav items */,
      lg: '8px' /* cards, drops */,
      xl: '10px' /* dialogs */,
    },
    shadows: {
      subtleBorder: '0px 0px 0px 1px rgba(0, 0, 0, 0.1)',
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
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...violetDark,
    ...greenDark,
    appBackground: grayDark.gray1,
    text: '#fff',
    backgroundProjects:
      'radial-gradient(100% 239.75% at 0% 0%, #082636 0%, rgba(5, 1, 5, 0.9) 56.25%, #070000 100%)',
    backgroundToolkit:
      'url("shapes-large-dark.svg"), linear-gradient(180deg, #1C1C1F 0%, #151718 100%)',
    backgroundProcess:
      'radial-gradient(100% 239.75% at 0% 0%, #301A3A 0%, #341A34 42.71%, #10243D 100%)',
    backgroundContact: 'linear-gradient(180deg, #082636 0%, #0A0B0C 100%)',
    backgroundTransparent: 'rgba(255, 255, 255, 0.1)',
  },
  shadows: {
    subtleBorder: '0px 0px 0px 1px rgba(0, 0, 0, 0.1)',
  },
});

export const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    color: '$text',
  },
  body: {
    background: '$appBackground',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  },
});
