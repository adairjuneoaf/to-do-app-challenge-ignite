import { TaskProps } from '../../@types/task'

export enum TasksActionTypes {
  ADD_TASK = 'ADD_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  COMPLETED_TASK = 'COMPLETED_TASK',
}

export type TasksReducerAction =
  | {
      type: TasksActionTypes.ADD_TASK
      payload: Pick<TaskProps, 'description'>
    }
  | {
      type: TasksActionTypes.REMOVE_TASK
      payload: Pick<TaskProps, 'id'>
    }
  | {
      type: TasksActionTypes.COMPLETED_TASK
      payload: Pick<TaskProps, 'id'>
    }

export interface TasksReducerState {
  tasks: Array<TaskProps>
}
