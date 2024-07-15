import { createContext, useEffect, useMemo } from 'react';

type colors = {
  primary: string;
  secondary: string;
};

type theme = {
  colors: colors;
};

type Props = {
  children: React.ReactNode;
  theme: theme;
};

const ThemeContext = createContext({
  theme: {
    colors: {
      primary: '255 115 179',
      secondary: '111 114 185'
    }
  },
});
export default function ThemeProvider(props: Props) {
  useEffect(() => {
    document.documentElement.style.setProperty(
      `--color-primary`,
      props.theme?.colors?.primary ?? '255 115 179'
    );
    document.documentElement.style.setProperty(
      `--color-secondary`,
      props.theme?.colors?.secondary ?? '111 114 185'
    );
  }, [props.theme?.colors]);

  const value = useMemo(() => {
    return { theme: props.theme };
  }, [props.theme]);

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}
