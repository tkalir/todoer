import React, { useState } from 'react';

const TodoItemEditor = ({ todo, updateTodo, cancelEdit }) => {
  const [recurrence, setRecurrence] = useState(todo.recurrence || 'daily');
  const [setbacks, setSetbacks] = useState(todo.setbacks || '');
  const [importance, setImportance] = useState(todo.importance || '');

  const handleSave = () => {
    updateTodo({
      ...todo,
      recurrence,
      setbacks,
      importance,
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
      <label>
        Recurrence:
        <select value={recurrence} onChange={(e) => setRecurrence(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </label>
      <label>
        Potential Setbacks:
        <input
          type="text"
          value={setbacks}
          onChange={(e) => setSetbacks(e.target.value)}
        />
      </label>
      <label>
        Why it is Important:
        <input
          type="text"
          value={importance}
          onChange={(e) => setImportance(e.target.value)}
        />
      </label>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
        <button onClick={handleSave}>Save</button>
        <button onClick={cancelEdit}>Cancel</button>
      </div>
    </div>
  );
};

export default TodoItemEditor;
