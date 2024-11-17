import React, { useState } from 'react';
import TasksPage from './TasksPage';
import GratitudePage from './GratitudePage';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('TasksPage');

  const renderPage = () => {
    switch (currentPage) {
      case 'TasksPage':
        return <TasksPage />;
      case 'GratitudePage':
        return <GratitudePage />;
      default:
        return <TasksPage />;
    }
  };

  return (
    <div className="app-container">
      <div className="side-menu">
        <button onClick={() => setCurrentPage('TasksPage')}>Tasks</button>
        <button onClick={() => setCurrentPage('GratitudePage')}>Gratitude</button>
      </div>
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;