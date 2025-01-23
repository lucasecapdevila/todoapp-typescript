import React from 'react'
import { TodoId, type TodoList } from '../types'
import TodoItem from './TodoItem'

interface Props {
  todos: TodoList
  onRemoveTodo: ({id}: TodoId) => void
}

const TodoList: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
    <ul className='todo-list'>
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
                onRemoveTodo={onRemoveTodo}
              />
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList