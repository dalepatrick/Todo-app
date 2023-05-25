import React from 'react';

const TodoItem = ({ todo, completeTodo, deleteTodo }) => {
  const handleComplete = () => {
    completeTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;