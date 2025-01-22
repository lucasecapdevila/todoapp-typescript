import React from 'react'
import { type TodoList } from '../types'
import TodoItem from './TodoItem'

interface Props {
  todos: TodoList
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {
        todos.map(todo => (
          <li 
            key={todo.id}
            className= {`${todo.completed ? 'completed' : ''}`}>
              <TodoItem
                key={todo.id}
                id= {todo.id}
                title= {todo.title}
                completed= {todo.completed}
              />
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList