import Table from "react-bootstrap/Table"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import DeleteButton from "../DeletedButtons/DeleteButton"
import RestoreButton from "../DeletedButtons/RestoreButton"
import "./deletedTable.css"

export default function DeletedTable(props) {
    const { darkTheme } = useContext(ThemeContext)

    const deleteTask = (index) => props.delete(index)
    const restoreTask = (index) => props.restore(index)
    return (
        <Table responsive="sm" variant={darkTheme ? "dark" : ""} striped="columns" className="mb-0" bordered hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.tasks.map((task,index) => (
                        <tr key={index}>
                            <td>{task.title}</td>
                            <td>{task.status}</td>
                            <td>{task.priority}</td>
                            <td>{task.dueDate}</td>
                            <td><DeleteButton Delete={()=>deleteTask(index)} /> <RestoreButton Restore={()=>restoreTask(index)} /></td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}