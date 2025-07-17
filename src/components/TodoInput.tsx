import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useTodoStore } from '../store/todoStore'

export const TodoInput: React.FC = () => {
  const [text, setText] = useState('')
  const { addTodo } = useTodoStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() || text.length > 0) {
      addTodo(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-3">
      <Input
        type="text"
        placeholder="할 일을 입력하세요..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 text-sm sm:text-base h-10 sm:h-11"
      />
      <Button 
        type="submit" 
        size="icon" 
        disabled={!text.trim()}
        className="h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0"
      >
        <Plus className="h-5 w-5 sm:h-6 sm:w-6" />
      </Button>
    </form>
  )
} 