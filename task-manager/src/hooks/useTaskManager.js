import { useState } from "react";

const useTaskManager = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if (task) setTasks((prev) => [...prev, task]);
    };

    // const deleteTask = (index) => {
    //     setTasks((prev) => prev.filter((_, i) => i !== index));
    // };

    const removeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      };
    


    return { tasks, addTask, removeTask };
};

export default useTaskManager;
