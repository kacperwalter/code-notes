import React, { useState, useRef, useEffect } from 'react'
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  // const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1', complete: false }]);
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []) // giving empty array means that this function will be run once

  // every time when smth changes we run this function
  useEffect(() =>  {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]) // anytime when smth in array changes we fire this function

  function handleAddTodo(e) {
    const name = todoNameRef.current.value; // saving the name from input to variable
    if (name === '') return; 
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
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
