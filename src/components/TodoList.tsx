import React from 'react'
import { type TodoId, type TodoList, type Todo as TodoType } from '../types'
import TodoItem from './TodoItem'

interface Props {
  todos: TodoList
  onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: ({id}: TodoId) => void
}

const TodoList: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
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
                onToggleCompleteTodo={onToggleCompleteTodo}
                onRemoveTodo={onRemoveTodo}
              />
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList