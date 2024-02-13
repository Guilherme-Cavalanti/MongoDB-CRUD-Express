import Table from "react-bootstrap/Table"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import "./taskTable.css"

export function TaskTable(props) {
    
    const {darkTheme} = useContext(ThemeContext)
    return (
        <Table responsive="sm" variant={darkTheme ? "dark" : ""} striped="columns" className="mb-0" bordered hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>
                {
                props.tasks.map(task => (
                    <tr key={task.id}>
                        <td>{task.title}</td>
                        <td>{task.status}</td>
                        <td>{task.priority}</td>
                        <td>{task.dueDate}</td>
                    </tr>
                ))
                }
                <tr>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                    <td>teste</td>
                </tr>
            </tbody>
        </Table>
    )
}