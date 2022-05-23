import React from 'react';
import { styled } from '../stitches.config';

interface ToolkitCardProps {
  icon: string;
  name: string;
  description: string;
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 15,
  rowGap: 13,
  width: 280,
  height: 206,
  backdropFilter: 'blur(6px)',
  background: '$backgroundTransparent',
  boxShadow: '$subtleBorder',
  borderRadius: '$lg',
});

const Icon = styled('img', {
  height: 30,
});

const Name = styled('div', {
  lineHeight: '24px',
  fontSize: '20px',
});

const Description = styled('p', {
  lineHeight: '24px',
  fontSize: '16px',
});

export const ToolkitCard: React.FC<ToolkitCardProps> = ({
  icon,
  name,
  description,
}) => {
  return (
    <Container>
      <Icon alt={`${name} icon`} src={`/toolkit-logos/${icon}`} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Container>
  );
};
