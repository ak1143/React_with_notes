import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {

  return (
    <>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
