import React, {createContext, useEffect, useMemo, useState} from "react";

type Props = {
    children: React.ReactNode;
    colors?: { primary: string, secondary: string };
};

const ThemeContext = createContext({
    colors: {},
});
export default function ThemeProvider(props: Props) {
    useEffect(() => {
        console.log(props.colors);
        document.documentElement.style.setProperty(`--color-primary`, props.colors?.primary ?? '255 115 179');
        document.documentElement.style.setProperty(`--color-secondary`, props.colors?.secondary ?? '111 114 185');
    }, [props.colors]);

    const value = useMemo(() => {
        return { colors: props.colors };
    }, [props.colors]);

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
}
