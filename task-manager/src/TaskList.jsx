import React, { useState } from 'react';
import useTaskManager from './hooks/useTaskManager';  

const TaskList = () => {
  const { tasks, addTask, removeTask } = useTaskManager();  
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask({ id: Date.now(), text: newTask });  
      setNewTask('');  
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

