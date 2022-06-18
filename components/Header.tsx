import React from 'react';
import { styled } from '../stitches.config';
import { ThemeToggle } from './ThemeToggle';

const Container = styled('div', {
  height: 800,
  position: 'relative',
  background: 'url(/header-light.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backdropFilter: 'blur(6px)',
});

const NavBar = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  padding: 24,
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
  columnGap: 24,
});

const NavButton = styled('a', {
  textDecoration: 'none',
  color: '$blue11',
  fontWeight: 600,
  letterSpacing: 0.3,
  fontSize: '18px',
  cursor: 'pointer',
});

const Content = styled('div', {
  height: 800,
  width: '100%',
  maxWidth: 1440,
  padding: 24,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const Title = styled('h1', {
  fontSize: '58px',
  lineHeight: '70px',
  fontWeight: 600,
  marginBottom: 20,
});

const Subtitle = styled('p', {
  fontSize: '24px',
  lineHeight: '32px',
  fontWeight: 400,
  maxWidth: 420,
});

export const Header: React.FC = () => {
  return (
    <Container>
      <NavBar>
        <NavButton href="#contact">Contact</NavButton>
        <NavButton href="https://github.com/coniel">Github</NavButton>
        <ThemeToggle />
      </NavBar>
      <Content>
        <Title>
          Hei!
          <br />
          I&apos;m Oscar.
        </Title>
        <Subtitle>
          A full-stack developer based in Helsinki, Finland. I craft
          user-friendly apps with human-friendly code, using Typescript and
          React.
        </Subtitle>
      </Content>
    </Container>
  );
};
