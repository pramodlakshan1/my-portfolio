import React from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300"
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    );
};

export default ThemeButton;