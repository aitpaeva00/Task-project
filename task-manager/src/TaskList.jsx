import React, { useState } from 'react';
import './App.css';
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
      
      {/* Input field for adding a new task */}
      <input
        type="text"
        value={newTask}  // The value of the input field is controlled by state
        onChange={(e) => setNewTask(e.target.value)}  // Update state on input change
        placeholder="Enter a new task"
      />
      
      {/* Button to trigger adding the task */}
      <button onClick={handleAddTask}>Add Task</button>

      {/* Displaying the list of tasks */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}  {/* Display the task text */}
            
            {/* Button to delete a task */}
            <button onClick={() => removeTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

