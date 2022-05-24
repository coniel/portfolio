import { Bold } from './Bold';
import { DarkTheme } from './DarkTheme';
import { Italic } from './Italic';
import { LightTheme } from './LightTheme';
import { List } from './List';
import { Send } from './Send';
import { Underline } from './Underline';

export const Icons = {
  Bold,
  DarkTheme,
  Italic,
  LightTheme,
  List,
  Send,
  Underline,
} as const;

// Turn icon names into a type
export type IconName = keyof typeof Icons;
