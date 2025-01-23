import React from 'react'
import { TodoId, type Todo as TodoType } from '../types'


interface Props extends TodoType {
  onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
  onRemoveTodo: (id: TodoId) => void
}

const TodoItem: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleCompleteTodo({
      id,
      completed: e.target.checked,
    })
  }

  return (
    <div className='view'>
      <input
        className='toggle'
        type="checkbox" 
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => {
          onRemoveTodo({id})
        }} 
      />
    </div>
  )
}

export default TodoItem