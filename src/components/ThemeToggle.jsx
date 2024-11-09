import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { darkMode, toggle } = useContext(ThemeContext);
    console.log({ darkMode, toggle });

    const handleOnClick = () => {
        toggle();
    }

    return (
        <div className="container-toggle">
            <input
                type="checkbox"
                id="themeToggle"
                className="toggle-checkbox"
                onClick={handleOnClick}
            />
            <label
                htmlFor="themeToggle"
                className="toggle-label"
            >
                <span className="toggle-label-background" />
            </label>
        </div>
    );
};

export default ThemeToggle;