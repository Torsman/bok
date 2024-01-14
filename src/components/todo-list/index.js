import './style.css';
import ToDoItemComponent from './todo-item';
import ToDoInputComponent from '../todo-input';
import React, { useState } from 'react';




const ToDoListComponent = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      text: taskText,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    console.log('Edit task:', tasks[index]);
  };

  return (
    <div className='todo-list'>
      <ToDoInputComponent addTask={addTask} />
      {tasks.map((task, index) => (
        <ToDoItemComponent
          key={index}
          text={task.text}
          createdAt={task.createdAt}
          deleteTask={() => deleteTask(index)}
          editTask={() => editTask(index)}
        />
      ))}
    </div>
  );
};

export default ToDoListComponent;
