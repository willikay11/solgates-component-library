import React, { createContext, useEffect, useMemo, useState } from 'react';

type colors = {
  primary: string;
  secondary: string;
};

type theme = {
  colors;
};
type Props = {
  children: React.ReactNode;
  theme?: theme;
};

const ThemeContext = createContext({
  theme: {},
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
