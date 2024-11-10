import { useState, createContext, useLayoutEffect, useEffect } from 'react';

export const ThemeContext = createContext({
    dark: false,
    toggle: () => { },
});

const ThemeProvider = ({ children }) => {
    const preferesDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    );
    const [darkMode, setDarkMode] = useState(preferesDark);

    useEffect(() => {
        if (preferesDark.matches) {
            setDarkMode(true);
            document.body.classList.add('theme-dark');
        } else {
            document.body.classList.add('theme-light');
        }

        // This callback will fire if the perferred color scheme changes without a reload
        preferesDark.addEventListener("change", (evt) => setDarkMode(evt.matches));
    }, []);

    const toggle = () => {
        const oldClass = darkMode ? 'theme-dark' : 'theme-light';
        const newClass = darkMode ? 'theme-light' : 'theme-dark';

        document.body.classList.replace(oldClass, newClass);

        setDarkMode(darkMode => !darkMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;