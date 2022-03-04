import React, { useState, useEffect } from 'react';
// import Act1 from './Act1';
// import Act2 from './Act2';
// import Act3 from './Act3';

import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const initialTodos = [
  {   id:1,
      title: "titulo 1",
      description: "descripcion 1",
      completed: false
  },
  {
      id:2,
      title: "titulo 2",
      description: "descripcion 2",
      completed: false
  }
];
const localTodos = JSON.parse(localStorage.getItem('todos'));

function App() {
  // const [show, setShow] = useState(false);
  const [todos, setTodos] = useState(localTodos || initialTodos);
  const [todoEdit, setTodoEdit] = useState(null);
  
  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const todoDelete = (todoId) => {

    if(todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    }

    const changedTodos = todos.filter(todo => todo.id !== todoId)

    setTodos(changedTodos);
  }
  const todoToogleCompleted = (todoId) => {

  
    const changedTodos = todos.map(todo => (
      todo.id === todoId
      ? {...todo, completed: !todo.completed}
       : todo
    ))

    setTodos(changedTodos);
  }
  const todoAdd = (todo) => {

    const newTodo = {
      id: Date.now(),
      ...todo,
      completed:false
    }

    const changedTodos = [
      newTodo,
      ...todos,
    ]

    setTodos(changedTodos)
  }

  const todoUpdate = (todoEdit) =>{
    const changedTodos = todos.map(todo => (
      todo.id === todoEdit.id
       ? todoEdit
       : todo
    ))

    setTodos(changedTodos);
  }
 
  return (
    <div className="container mt-4">
      <div className='row'>
          <div className='col-8'>
              <TodoList 
              todoDelete={todoDelete}
              todos={todos}
              todoToogleCompleted={todoToogleCompleted}
              setTodoEdit={setTodoEdit}
              />
          </div>
          <div className='col-4'>
              <TodoForm 
                todoEdit={todoEdit}
                todoAdd={todoAdd}
                todoUpdate={todoUpdate}
                setTodoEdit={setTodoEdit}
              />
          </div>
      </div>




      




      {/* <Act1 /> */}
       {/* <Act2 /> 
      <button onClick={()=> setShow(!show)}>Show size</button>
      {show && <Act3 />}  */}
    </div>
  );
}

export default App;


