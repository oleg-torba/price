import { useState, createContext, useContext } from "react";

export const ThemeContext = createContext('dark-theme')
const useTheme = () => useContext(ThemeContext)

export const ThemeChanger = () => {
    const [theme, setTheme] = useState('light-theme')

const onChange = () => {
    setTheme((prevTheme) => (prevTheme === 'dark-theme' ? 'light-theme': 'dark-theme'))
}
    return (
        <div class="theme">
        
        <p class="theme-icon-light">Light</p>

        <div class="switch">
            {theme === 'dark-theme' ? <span className="checkboxActive" onClick={onChange}></span> : <span className="checkbox" onClick={onChange}></span>}
            {theme === 'dark-theme' ? <span className="slideractive" onClick={onChange}></span> : <span className="slider" onClick={onChange}></span>}
        </div>
        <p class="theme-icon-dark">Dark</p>
      </div>
  
    )
}

