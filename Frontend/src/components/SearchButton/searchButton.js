import SearchIcon from "../icons/SearchIcon"
import "./searchButton.css"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export default function SearchButton(props) {
    const { darkTheme } = useContext(ThemeContext)

    const ClickFunction = () => props.Search()

    return (
        <button className="searchButton rounded" onClick={ClickFunction}>
            <SearchIcon color={darkTheme ? "#FFF" : "black"}/>
        </button>
    )
}   