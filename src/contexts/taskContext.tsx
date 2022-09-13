import { createContext, useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import { TasksReducer } from '../reducers/tasks/reducer'
import { ITaskContextProps, ITaskContextProviderProps } from './types'

export const TaskContext = createContext({} as ITaskContextProps)

export const TaskContextProvider = ({ children }: ITaskContextProviderProps) => {
  const [TasksState, dispatch] = useReducer(TasksReducer, {
    tasks: [
      {
        description: 'Lavar louça',
        createdAt: new Date().toJSON(),
        status: 'in-progress',
        id: uuid(),
      },
      {
        description: 'Dar banho no PET',
        createdAt: new Date().toJSON(),
        status: 'finished',
        id: uuid(),
      },
    ],
  })

  const { tasks } = TasksState

  return <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
}
