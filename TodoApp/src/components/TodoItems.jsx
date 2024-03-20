import TodoItem from './TodoItem.jsx'
import React from 'react'

const TodoItems = ({ todoItems }) => {
  return (
    <div classNameName="items-container">
      {todoItems.map(item => (
        <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} />
      ))}
    </div>
  );
};
export default TodoItems;
