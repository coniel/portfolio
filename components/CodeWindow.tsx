import React from 'react';
import { styled } from '../stitches.config';

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

const WindowActions = styled('div', {
  display: 'flex',
  columnGap: 8,
  position: 'absolute',
  left: 12,
  top: 12,
});

const WindowAction = styled('div', {
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
        <WindowActions>
          <WindowAction color="red" />
          <WindowAction color="yellow" />
          <WindowAction color="green" />
        </WindowActions>
        <FileName>{fileName}</FileName>
      </Header>
    </Container>
  );
};
