import React from 'react';
import { styled } from '../stitches.config';
import { TrafficLights } from './TrafficLights';

interface CodeWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  fileName: string;
}

const Container = styled('div', {
  boxShadow: '0px 50px 100px -50px rgba(7, 0, 31, 0.7)',
  borderRadius: '$xl',
  backgroundColor: '#071D2A',
  flex: 1,
});

const Header = styled('div', {
  padding: 12,
  textAlign: 'center',
  position: 'relative',
});

const FileName = styled('span', {
  fontSize: '12px',
  lineHeight: '12px',
  fontWeight: 300,
  color: 'rgba(224, 224, 224, 0.51)',
});

export const CodeWindow: React.FC<CodeWindowProps> = ({
  fileName,
  ...other
}) => {
  return (
    <Container {...other}>
      <Header>
        <TrafficLights
          style={{
            position: 'absolute',
            left: 12,
            top: 12,
          }}
        />
        <FileName>{fileName}</FileName>
      </Header>
    </Container>
  );
};
