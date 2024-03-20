import AppName from "./AppName";
import AddToDo from "./AddToDo";
import TodoItems from "./TodoItems";
import React from "react";

function App() {

  const todos = [
    {
      name: 'Butsf',
      dueDate: '23/5/22',
    },
    {
      name: 'Butsf',
      dueDate: '23/5/22',
    },
    {
      name: 'Butsf',
      dueDate: '23/5/22',
    },
    {
      name: 'sdssds',
      dueDate: 'right now'
    }];


  return (<center classNameName='todoContainer'>
    <AppName name='To Do App'></AppName>
    <AddToDo></AddToDo>
    <TodoItems todoItems={todos}></TodoItems>



  </center>
  );
}

export default App
