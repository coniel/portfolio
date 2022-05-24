import React from 'react';
import { styled } from '../stitches.config';

const Container = styled('div', {
  display: 'flex',
  columnGap: 8,
});

const Button = styled('div', {
  width: 12,
  height: 12,
  borderRadius: 6,
  variants: {
    color: {
      red: {
        backgroundColor: '#ED6A5E',
      },
      yellow: {
        backgroundColor: '#F4BD50',
      },
      green: {
        backgroundColor: '#61C454',
      },
    },
  },
});

export const TrafficLights: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props,
) => (
  <Container {...props}>
    <Button color="red" />
    <Button color="yellow" />
    <Button color="green" />
  </Container>
);
