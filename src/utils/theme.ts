import { theme } from "../styles/theme";

export const getThemeColor = (color: keyof typeof theme.colors): string => {
  const colorValue = theme.colors[color];

  return typeof colorValue === 'string' ? colorValue : theme.colors.primary;
};