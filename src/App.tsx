import React, { useState } from 'react'
import TodoList from './components/TodoList'

const mockTodos = [
  {
    id: '1',
    title: 'Tarea 1',
    completed: false,
  },
  {
    id: '2',
    title: 'Tarea 2',
    completed: true,
  },
  {
    id: '3',
    title: 'Tarea 3',
    completed: false,
  },
]

const App: React.FC = () : JSX.Element => {
  const [todos] = useState(mockTodos)

  return (
    <>
      <TodoList todos = {todos} />
    </>
  )
}

export default App
