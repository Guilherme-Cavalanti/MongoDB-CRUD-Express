import { createContext, useState, useCallback } from "react";

const ThemeContext = createContext()

const ThemeFunctions = function ({children}){
    const [darkTheme, setDarkTheme] = useState(false)

    const switchTheme = useCallback(() => {
        setDarkTheme(prevTheme => !prevTheme);
      }, []);

    return (
        <ThemeContext.Provider value = {{darkTheme, switchTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {
    ThemeContext,
    ThemeFunctions
}