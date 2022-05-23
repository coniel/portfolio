import React from 'react';
import { styled } from '../stitches.config';

const Container = styled('div', {
  display: 'flex',
  columnGap: 8,
  position: 'absolute',
  left: 12,
  top: 12,
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

export const TrafficLights: React.FC = () => (
  <Container>
    <Button color="red" />
    <Button color="yellow" />
    <Button color="green" />
  </Container>
);
