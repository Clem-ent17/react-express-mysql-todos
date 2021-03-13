import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import Container from './components/Container'
import axios from 'axios'

export default function TodoApp() {
  const [todo, setTodo] = useState({ name: '', completed: false })
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function fetchTodos(){
      try {
        const response = await axios('/api/todos')
        // const fetchedTodos = response.json()
        // console.log('response', response)
        // console.log('fetchedTodos', fetchedTodos)
        setTodos(response.data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchTodos()
  }, [])
  useEffect(() => console.log("todos", todos))

  function handleTodo(event){
    setTodo({...todo, name: event.target.value})
  }

  function handleDelete(id) {
    console.log('delete')
    // setTodos(updatedTodos)
  }

  async function handleSubmit(event){
    event.preventDefault()
    
    await axios.post('/api/todos', todo)
    
    setTodos([...todos, todo])
    setTodo({ name: '', completed: false })
  }

  function handleEdit(id){
    console.log('edit me', id)
    /*

    */
  }
//https://www.robinwieruch.de/react-update-item-in-list
  function toggleStatus(id){
    const updatedTodos = todos.map(todo =>{
      if (todo.id === id) {
        return {...todo, completed: !todo.completed }
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="container">
      <Header />
      <TodoForm handleTodo={handleTodo} handleSubmit={handleSubmit} todo={todo}/>
      <Container todos={todos} toggleStatus={toggleStatus} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  );
}


