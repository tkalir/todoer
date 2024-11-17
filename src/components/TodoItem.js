import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo, askQuestion }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
      <div>
      {!todo.completed && (
          <button 
            style={{ marginLeft: '8px', background: 'none', border: 'none', cursor: 'pointer' }} 
            onClick={() => askQuestion(todo.text)}
          >
            💪
          </button>
        )}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;