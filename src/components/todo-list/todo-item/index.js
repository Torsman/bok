import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import React from 'react';


const ToDoItemComponent = ({ text, createdAt, deleteTask, editTask }) => {
  const date = (createdAt || new Date()).toDateString();

  return (
    <div className='todo-item'>
      <div>
        <input class="form-check-input" type="checkbox" value="option1" />
        <label class="form-check-label" for="inlineCheckbox1"></label>
        <span className="todo-text">{text}</span>
      </div>
      <span className="todo-text">{date}</span>
      <span className="span-button" onClick={deleteTask}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
      <span className="span-button" onClick={editTask}>
        <FontAwesomeIcon icon={faPen} />
      </span>
    </div>
  );
};

export default ToDoItemComponent;
