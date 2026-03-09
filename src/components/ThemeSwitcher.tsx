"use client"

import { useEffect, useState } from "react"

// ThemeSwitcher component
function ThemeSwitcher() {
    const [dark, setDark] = useState(false);
    const [buttonText, setButtonText] = useState("Dark Mode")

    // Saves the theme when reload
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        if(savedTheme == 'dark-mode') {
            setDark(true);
            document.body.classList.add('dark-mode');
            setButtonText("Light Mode");
        }
    }, []);

    // Applies or remove dark mode
    useEffect(() => {
        if(dark) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            setButtonText("Light Mode");
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', '');
            setButtonText("Dark Mode");
        }
    });

  return (
    <button id="theme-switcher" className="theme-switcher" onClick={() => setDark(!dark)}>{buttonText}</button>
  )
}

export default ThemeSwitcher