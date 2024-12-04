import { createContext } from "react";
import useTaskManager from "./hooks/useTaskManager";
 
export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const { tasks, addTask, deleteTask } = useTaskManager();

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
