import TaskProvider from "./TaskContext";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

function App() {
    return (
        <TaskProvider>
            <div>
                <h1>Task Manager</h1>
                <TaskList />
            </div>
        </TaskProvider>
    );
}

export default App;


