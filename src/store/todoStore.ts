import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

interface TodoStore {
  todos: Todo[]
  filter: 'all' | 'active' | 'completed'
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
  setFilter: (filter: 'all' | 'active' | 'completed') => void
  clearCompleted: () => void
  getFilteredTodos: () => Todo[]
  getActiveCount: () => number
  getCompletedCount: () => number
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      filter: 'all',
      
      addTodo: (text: string) => {
        const newTodo: Todo = {
          id: Date.now().toString(),
          text: text.trim(),
          completed: false,
          createdAt: new Date(),
        }
        set((state) => ({
          todos: [...state.todos, newTodo]
        }))
      },
      
      toggleTodo: (id: string) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        }))
      },
      
      deleteTodo: (id: string) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id)
        }))
      },
      
      setFilter: (filter: 'all' | 'active' | 'completed') => {
        set({ filter })
      },
      
      clearCompleted: () => {
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed)
        }))
      },
      
      getFilteredTodos: () => {
        const { todos, filter } = get()
        switch (filter) {
          case 'active':
            return todos.filter((todo) => !todo.completed)
          case 'completed':
            return todos.filter((todo) => todo.completed)
          default:
            return todos
        }
      },
      
      getActiveCount: () => {
        return get().todos.filter((todo) => !todo.completed).length
      },
      
      getCompletedCount: () => {
        return get().todos.filter((todo) => todo.completed).length
      },
    }),
    {
      name: 'todo-storage',
    }
  )
) 