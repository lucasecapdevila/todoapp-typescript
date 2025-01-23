import React, { useState } from 'react'
import TodoList from './components/TodoList'
import { TodoId } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'Empezar tutorial de Midu',
    completed: true,
  },
  {
    id: '2',
    title: 'Aprender React + Typescript',
    completed: false,
  },
  {
    id: '3',
    title: 'Recibirnos',
    completed: false,
  },
]

const App: React.FC = () : JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({id}: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <TodoList 
        onRemoveTodo = {handleRemove}
        todos = {todos}
      />
    </div>
  )
}

export default App
