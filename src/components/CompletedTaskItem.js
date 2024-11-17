import React from 'react';

const CompletedTaskItem = ({ task, deleteCompletedTask}) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
      {task.text}<button onClick={() => {console.log(task.id); deleteCompletedTask(task.id)}}>delete</button>
    </div>
  );
};

export default CompletedTaskItem;