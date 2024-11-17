import React from 'react';
import TodoItem from './TodoItem';
import InsightBar from './Feedback';
import useOpenAI from '../useOpenAI'; 

const open_ai_key = process.env.OPEN_AI_KEY;

  const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
    const { response, loading, error, askQuestion } = useOpenAI(open_ai_key);
    return (
      <>
        <div>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} askQuestion={askQuestion} />
          ))}
        </div>
        <InsightBar insight={response} />
      </>
    );
};

export default TodoList;