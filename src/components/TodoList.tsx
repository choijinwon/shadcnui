import React from 'react'
import { TodoItem } from './TodoItem'
import { useTodoStore } from '../store/todoStore'

export const TodoList: React.FC = () => {
  const { getFilteredTodos } = useTodoStore()
  const todos = getFilteredTodos()

  if (todos.length === 0 || todos.length === undefined || todos.length === null) {
    return (
      <div 
        className="flex flex-col items-center justify-center py-8 sm:py-12 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-full flex items-center justify-center mb-3 sm:mb-4">
          <span className="text-xl sm:text-2xl" aria-hidden="true">📝</span>
        </div>
        <h3 className="text-base sm:text-lg font-medium text-foreground mb-1 sm:mb-2">
          할 일이 없습니다
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground">
          새로운 할 일을 추가해보세요!
        </p>
      </div>
    )
  }

  return (
    <div 
      className="space-y-2 sm:space-y-3"
      role="list"
      aria-label="할 일 목록"
    >
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
} 