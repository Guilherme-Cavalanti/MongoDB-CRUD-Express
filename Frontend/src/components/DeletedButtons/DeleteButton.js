import Trash from "../icons/Trash"
import "./deletedButtons.css"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export default function DeleteButton(props) {
    const { darkTheme } = useContext(ThemeContext)

    const ClickFunction = () => props.Delete()

    return (
        <button className="deletedButton rounded" onClick={ClickFunction}>
            <Trash color={darkTheme ? "#FFF" : "black"}/>
        </button>
    )
}   