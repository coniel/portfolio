import React from 'react';
import { styled, darkTheme, keyframes } from '../stitches.config';
import { ContentContainer } from './ContentContainer';
import { EmailWindow } from './EmailWindow';
import { SectionHeader } from './SectionHeader';

const Container = styled('div', {
  paddingTop: 80,
  paddingBottom: 300,
  background: '$backgroundContact',
  overflow: 'hidden',
  position: 'relative',
});

const wave = keyframes({
  '0%': {
    marginLeft: 0,
  },
  '100%': {
    marginLeft: -1600,
  },
});

const swell = keyframes({
  '0%, 100%': {
    transform: 'translate3d(0,-25px,0)',
  },
  '50%': {
    transform: 'translate3d(0,5px,0)',
  },
});

const Ocean = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
});

const Wave = styled('div', {
  background: 'url(wave-1-light.svg)',
  position: 'absolute',
  top: -175,
  width: 6400,
  height: 198,
  animation: `${wave} 100s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite, ${swell} 30s ease -1.25s infinite`,
  transform: 'translate3d(0, 0, 0)',
  [`.${darkTheme} &`]: {
    background: 'url(wave-1-dark.svg)',
  },
  '&:nth-of-type(2)': {
    height: 225,
    background: 'url(wave-2-light.svg)',
    animation: `${wave} 120s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, ${swell} 40s ease -1.25s infinite`,
    opacity: 1,
    [`.${darkTheme} &`]: {
      background: 'url(wave-2-dark.svg)',
    },
  },
});

export const Contact: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <SectionHeader overline="Contact" title="Say hello!" />
        <EmailWindow />
      </ContentContainer>
      <Ocean>
        <Wave />
        <Wave />
      </Ocean>
    </Container>
  );
};
