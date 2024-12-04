import { useState, useContext } from "react";
import { TaskContext } from "./TaskContext";

const AddTask = () => {
    const { addTask } = useContext(TaskContext);
    const [task, setTask] = useState("");

    const handleAddTask = () => {
        addTask(task);
        setTask("");
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;
