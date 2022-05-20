import React from 'react';
import { useTheme } from 'next-themes';
import { IconButton } from './IconButton';

export const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () =>
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');

  return (
    <IconButton
      onClick={toggleTheme}
      icon={resolvedTheme === 'dark' ? 'LightTheme' : 'DarkTheme'}
    />
  );
};
