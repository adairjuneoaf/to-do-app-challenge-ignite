import { createContext, useCallback, useReducer } from 'react'
import { TasksReducer } from '../reducers/tasks/reducer'
import { TasksActionTypes } from '../reducers/tasks/types'
import { ITaskContextProps, ITaskContextProviderProps } from './types'

export const TaskContext = createContext({} as ITaskContextProps)

export const TaskContextProvider = ({ children }: ITaskContextProviderProps) => {
  const [TasksState, dispatch] = useReducer(
    TasksReducer,
    {
      tasks: [],
    },
    // () => {},
  )

  const { tasks } = TasksState

  const countTotalTasks = tasks.length
  const countTasksCompleted = tasks.filter((task) => task.status === 'finished').length

  const addNewTask = useCallback((descriptionTask: string) => {
    dispatch({
      type: TasksActionTypes.ADD_TASK,
      payload: {
        description: descriptionTask,
      },
    })
  }, [])

  const removeTask = useCallback((id: string) => {
    dispatch({
      type: TasksActionTypes.REMOVE_TASK,
      payload: {
        id: id,
      },
    })
  }, [])

  const markAsCompletedTask = useCallback((id: string) => {
    dispatch({
      type: TasksActionTypes.COMPLETED_TASK,
      payload: {
        id: id,
      },
    })
  }, [])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        countTotalTasks,
        countTasksCompleted,
        addNewTask,
        removeTask,
        markAsCompletedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
