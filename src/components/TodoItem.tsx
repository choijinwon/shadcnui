import React from 'react'
import { Trash2, Circle, CheckCircle } from 'lucide-react'
import { Button } from './ui/button'
import { useTodoStore } from '../store/todoStore'
import type { Todo } from '../store/todoStore'

interface TodoItemProps {
  todo: Todo
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoStore()

  return (
    <div 
      className={`flex items-center gap-3 p-3 sm:p-4 rounded-lg border-2 transition-all ${
        todo.completed
          ? 'border-green-200 bg-green-50 shadow-sm'
          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
      }`}
      role="listitem"
      aria-label={`할 일: ${todo.text}`}
    >
      <div 
        className="flex-shrink-0 cursor-pointer"
        onClick={() => toggleTodo(todo.id)}
        role="button"
        tabIndex={0}
        aria-label={todo.completed ? '완료됨 - 클릭하여 완료 해제' : '완료되지 않음 - 클릭하여 완료'}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggleTodo(todo.id)
          }
        }}
      >
        {todo.completed ? (
          <CheckCircle className="h-7 w-7 text-green-600" />
        ) : (
          <Circle className="h-7 w-7 text-gray-400 hover:text-gray-600" />
        )}
      </div>
      <span
        className={`flex-1 text-sm sm:text-base break-words leading-relaxed ${
          todo.completed
            ? 'line-through text-gray-500'
            : 'text-gray-900'
        }`}
      >
        {todo.text}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTodo(todo.id)}
        className="h-8 w-8 sm:h-9 sm:w-9 text-gray-400 hover:text-red-500 flex-shrink-0"
        aria-label={`${todo.text} 삭제`}
      >
        <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
    </div>
  )
} 