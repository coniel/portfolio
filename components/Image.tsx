import React from 'react';
import { useTheme } from 'next-themes';
import ImagePrimitive, { ImageProps as ImagePrimitiveProps } from 'next/image';

export interface ImageProps extends Omit<ImagePrimitiveProps, 'src'> {
  /**
   * The light mode imarge src.
   */
  srcLight: string;

  /**
   * The dark mode image src.
   */
  srcDark: string;
}

export const Image: React.FC<ImageProps> = ({
  srcLight,
  srcDark,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <ImagePrimitive {...props} src={theme === 'light' ? srcLight : srcDark} />
  );
};
