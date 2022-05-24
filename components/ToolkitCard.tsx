import React from 'react';
import { useTheme } from 'next-themes';
import { styled } from '../stitches.config';

interface ToolkitCardProps {
  icon: string;
  iconDark?: string;
  name: string;
  description: string;
}

const Container = styled('div', {
  display: 'flex',
  flex: '0 0 auto',
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
  iconDark,
  name,
  description,
}) => {
  const { resolvedTheme } = useTheme();

  return (
    <Container>
      <Icon
        alt={`${name} icon`}
        src={`/toolkit-logos/${
          resolvedTheme === 'dark' && iconDark ? iconDark : icon
        }`}
      />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Container>
  );
};
