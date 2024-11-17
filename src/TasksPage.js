import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import CompletedTaskList from './components/CompletedTaskList';
import './App.css';

const TasksPage = () => {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  const [completedTasks, setCompletedTasks] = useState(() => JSON.parse(localStorage.getItem('completedTasks')) || []);
  const [selectedValue, setSelectedValue] = useState('today');

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  //   setTodos(storedTodos);
  // }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);


  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    const completedTask = todos.find(todo => todo.id === id);
    
    if (completedTask) {
      const updatedTask = { ...completedTask, completionDate: new Date().toISOString() };
      setCompletedTasks([...completedTasks, updatedTask]);
      deleteTodo(id);
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteCompletedTask = (id) => {
    console.log(id);
    console.log(JSON.stringify(completedTasks[0]));
    setCompletedTasks(completedTasks.filter((todo) => todo.id !== id));
  };

  const todayDate = new Date().toISOString().split('T')[0];

  const filteredCompletedTask = completedTasks.filter(task => {
    console.log(selectedValue);

    if (selectedValue === 'all') {
      return true;
    }
    console.log(task.completionDate);
    return task.completionDate && task.completionDate.split('T')[0] === todayDate;
  });
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      <select id="timeframe" value={selectedValue} onChange={handleChange}>
        <option value="today">Today</option>
        <option value="all">All</option>
      </select>
      <CompletedTaskList tasks={filteredCompletedTask} deleteCompletedTask={deleteCompletedTask} />
    </div>
  );
};

export default TasksPage;