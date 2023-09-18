import React, { useState } from 'react';
import './todolists.css';

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleEditTask = (index) => {
    const editedTask = prompt('Edit task:', tasks[index]);
    if (editedTask !== null && editedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editedTask;
      setTasks(updatedTasks);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="container">
        <h1>Todolist</h1>
        <div>
          <input
            className='input'
            placeholder='Enter the task'
            value={newTask}
            onChange={handleInputChange}
          />
          <button className='btn' onClick={handleAddTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className='Editbutton' onClick={() => handleEditTask(index)}>Edit</button>
              <button className='Deletebutton' onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;
