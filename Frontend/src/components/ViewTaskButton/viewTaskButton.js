import RightArrow from "../icons/RightArrow";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TaskButton.css"

export default function ViewTaskButton (props){
    const {darkTheme} = useContext(ThemeContext)
    const nav = useNavigate()
    const GoToTask = () => nav(`/browse/task?id=${props.id}`)

    return (
        <button className="viewButton rounded" onClick={GoToTask}>
            <RightArrow color={darkTheme ? "#FFF" : "black"}/>
        </button>
    )
}