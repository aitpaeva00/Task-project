import { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function App() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <AddTask task={task} setTask={setTask} addTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;


