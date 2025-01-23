import React, { useState } from 'react'
import TodoList from './components/TodoList'
import { TodoId, Todo as TodoType } from './types'

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

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ) : void => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <TodoList
        onToggleCompleteTodo = {handleCompleted}
        onRemoveTodo = {handleRemove}
        todos = {todos}
      />
    </div>
  )
}

export default App
