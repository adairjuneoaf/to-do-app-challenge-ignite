import { PropsWithChildren } from 'react'
import { TaskProps } from '../@types/task'

export type ITaskContextProviderProps = PropsWithChildren

export interface ITaskContextProps {
  tasks: Array<TaskProps>
}
