import CircleArrow from "../icons/CircleArrow"
import "./deletedButtons.css"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export default function RestoreButton(props) {
    const { darkTheme } = useContext(ThemeContext)

    const ClickFunction = () => props.Restore()

    return (
        <button className="deletedButton rounded" onClick={ClickFunction}>
            <CircleArrow color={darkTheme ? "#FFF" : "black"}/>
        </button>
    )
}   