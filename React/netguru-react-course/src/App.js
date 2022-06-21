import React, { useState, useRef } from 'react'

import TodoList from "./TodoList";

function App() {
  // const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1', complete: false }]);
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value; // saving the name from input to variable
    if (name === '') return; 
    setTodos(prevTodos => {
      return [...prevTodos, { id: 1, name: name, complete: false }];
    })
    todoNameRef.current.value = null; // clears the input afters clicking add button COOL
  }

  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button  onClick={handleAddTodo}>Add Toto</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
