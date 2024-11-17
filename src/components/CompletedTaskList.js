import React from 'react';
import CompletedTaskItem from './CompletedTaskItem';

const CompletedTaskList = ({ tasks, deleteCompletedTask }) => {
  return (
    <div className="completed-task-list">
      {tasks.length > 0 ? (
        tasks.map(task => <CompletedTaskItem key={task.id} task={task} deleteCompletedTask={deleteCompletedTask} />)
      ) : (
        <p>No completed tasks.</p>
      )}
    </div>
  );
};

export default CompletedTaskList;