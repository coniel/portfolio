import { DarkTheme } from './DarkTheme';
import { LightTheme } from './LightTheme';

export const Icons = { DarkTheme, LightTheme } as const;

// Turn icon names into a type
export type IconName = keyof typeof Icons;
