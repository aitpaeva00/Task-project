const AddTask = ({ task, setTask, addTask }) => (
    <div>
        <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
    </div>
);

export default AddTask;

