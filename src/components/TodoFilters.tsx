import React from 'react'
import { Button } from './ui/button'
import { useTodoStore } from '../store/todoStore'

export const TodoFilters: React.FC = () => {
  const { filter, setFilter, clearCompleted, getActiveCount, getCompletedCount } = useTodoStore()
  const activeCount = getActiveCount()
  const completedCount = getCompletedCount()

  return (
    <div className="flex flex-col gap-3 p-3 sm:p-4 bg-card rounded-lg border">
      <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-muted-foreground">
        <span>{activeCount}개 남음</span>
        {completedCount > 0 && (
          <>
            <span>•</span>
            <span>{completedCount}개 완료</span>
          </>
        )}
      </div>
      
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        <Button
          variant={filter === 'all' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setFilter('all')}
          className="text-xs sm:text-sm px-2 sm:px-3"
        >
          전체
        </Button>
        <Button
          variant={filter === 'active' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setFilter('active')}
          className="text-xs sm:text-sm px-2 sm:px-3"
        >
          진행중
        </Button>
        <Button
          variant={filter === 'completed' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setFilter('completed')}
          className="text-xs sm:text-sm px-2 sm:px-3"
        >
          완료
        </Button>
      </div>
      
      {completedCount > 0 && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={clearCompleted}
            className="text-xs sm:text-sm text-destructive hover:text-destructive"
          >
            완료된 항목 삭제
          </Button>
        </div>
      )}
    </div>
  )
} 