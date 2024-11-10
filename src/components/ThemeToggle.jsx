import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { darkMode, toggle } = useContext(ThemeContext);

    const handleOnClick = () => {
        toggle();
    }

    return (
        <div className="theme-toggle-container">
            <div>{darkMode ? 'Dark' : 'Light'}</div>
            <input
                type="checkbox"
                id="themeToggle"
                className="toggle-checkbox"
                onClick={handleOnClick}
            />
            <label
                htmlFor="themeToggle"
                className="toggle-label"
            />
        </div>
    );
};

export default ThemeToggle;