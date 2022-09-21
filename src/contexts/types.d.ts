import { PropsWithChildren } from 'react'
import { TaskProps } from '../@types/task'

export type ITaskContextProviderProps = PropsWithChildren

export interface ITaskContextProps {
  tasks: Array<TaskProps>
  countTotalTasks: number
  countTasksCompleted: number
  addNewTask: (descriptionTask: string) => void
  removeTask: (id: string) => void
  markAsCompletedTask: (id: string) => void
}
