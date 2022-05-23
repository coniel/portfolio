import React from 'react';
import { styled } from '../stitches.config';

interface SectionHeaderProps {
  title: string;
  overline: string;
}

const Container = styled('div', {
  paddingBottom: 24,
});

const Overline = styled('div', {
  fontSize: '15px',
  lineHeight: '20px',
  fontWeight: 500,
  color: '$violet11',
  marginBottom: 5,
});

const Title = styled('h2', {
  fontSize: '36px',
  lineHeight: '42px',
  fontWeight: 500,
});

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  overline,
}) => {
  return (
    <Container>
      <Overline>{overline}</Overline>
      <Title>{title}</Title>
    </Container>
  );
};
