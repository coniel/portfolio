import React from 'react';
import { styled } from '../stitches.config';
import { Icons, IconName } from '../icons';

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The name of the icon to display.
   */
  icon: IconName;
}

const Button = styled('button', {
  border: 'none',
  cursor: 'pointer',
  padding: 4,
  height: 28,
  width: 28,
  background: '$gray3',
  borderRadius: '$xs',
  '&:hover': {
    background: '$gray4',
  },
  '& svg': {
    fill: '$gray11',
    width: 20,
    height: 20,
  },
});

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...other }) => {
  const IconComponent = Icons[icon];

  return (
    <Button {...other}>
      <IconComponent />
    </Button>
  );
};
