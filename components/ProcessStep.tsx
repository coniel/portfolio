import React from 'react';
import { darkTheme, styled } from '../stitches.config';

interface ProcessStepProps {
  title: string;
  description: string;
  active?: boolean;
  onClick?: () => void;
}

const Container = styled('div', {
  $$darkBackgroundColor: 'rgba(255, 255, 255, 0.12)',
  $$darkBoxShadow: '0px 6px 16px -6px rgba(0, 0, 0, 0.91)',
  padding: 15,
  borderRadius: '$lg',
  cursor: 'pointer',
  transition: 'transform 0.1s ease-out',
  '&:hover': {
    background: '#FEFEFF',
    boxShadow: '0px 6px 16px -6px rgba(0, 46, 62, 0.8)',
    transform: 'translateY(-2px)',
    [`.${darkTheme} &`]: {
      backgroundColor: '$$darkBackgroundColor',
      boxShadow: '$$darkBoxShadow',
    },
  },
  variants: {
    active: {
      true: {
        background: '#FEFEFF',
        boxShadow: '0px 6px 16px -6px rgba(0, 46, 62, 0.8)',
        [`.${darkTheme} &`]: {
          backgroundColor: '$$darkBackgroundColor',
          boxShadow: '$$darkBoxShadow',
        },
        '&:hover': {
          transform: 'translateY(0)',
        },
      },
    },
  },
});

const Title = styled('div', {
  fontSize: '15px',
  lineHeight: '22px',
  fontWeight: 600,
});

const Description = styled('div', {
  fontWeight: 300,
  fontSize: '15px',
  lineHeight: '23px',
  color: '$textSecondary',
});

export const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  description,
  active,
  onClick,
}) => {
  return (
    <Container active={active} role="button" onClick={onClick}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
