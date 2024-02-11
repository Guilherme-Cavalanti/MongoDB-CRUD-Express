import Moon from "../icons/Moon"
import Sun from "../icons/Sun"
import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react"
import "./ThemeButton.css"

export default function ThemeButton() {

    const { switchTheme, darkTheme } = useContext(ThemeContext)

    return (
        <button onClick={switchTheme} className="theme-button rounded" >
            {darkTheme ? (
                <Sun />
            ) : (
                <Moon />
            )}
        </button>
    )
}