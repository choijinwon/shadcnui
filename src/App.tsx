import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { TodoFilters } from './components/TodoFilters'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background" role="main" aria-label="할 일 관리 애플리케이션">
        <div className="container mx-auto px-4 py-6 sm:py-8 max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="space-y-4 sm:space-y-6">
            <header className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                할 일 목록
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                오늘 해야 할 일들을 관리해보세요
              </p>
            </header>
            
            <section aria-label="새 할 일 추가">
              <TodoInput />
            </section>
            
            <section aria-label="할 일 필터">
              <TodoFilters />
            </section>
            
            <section aria-label="할 일 목록">
              <TodoList />
            </section>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default App
