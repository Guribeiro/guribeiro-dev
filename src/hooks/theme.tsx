import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { dark, DarkThemeType } from '@/styles/themes/dark';
import { light, LightThemeType } from '@/styles/themes/light';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

type Theme = DarkThemeType | LightThemeType;

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

interface Props {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(light);

  useEffect(() => {
    const loadPersistentTheme = () => {
      const themePersisted = localStorage.getItem('guribeiro-dev/theme');
      if (themePersisted) {
        setTheme(JSON.parse(themePersisted));
      }
    };
    loadPersistentTheme();
  }, []);

  useEffect(() => {
    localStorage.setItem('guribeiro-dev/theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error('useTheme must be used within an ThemeProvider');

  return context;
}

export { ThemeProvider, useTheme };
