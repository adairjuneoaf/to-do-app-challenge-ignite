import { v4 as uuid } from 'uuid'
import { TaskProps } from '../../@types/task'

import { TasksActionTypes, TasksReducerAction, TasksReducerState } from './types'

export const TasksReducer = (state: TasksReducerState, action: TasksReducerAction) => {
  switch (action.type) {
    case TasksActionTypes.ADD_TASK: {
      const newTaskData: TaskProps = {
        id: uuid(),
        status: 'in-progress',
        createdAt: new Date().toJSON(),
        description: action.payload.description,
      }

      return {
        tasks: [...state.tasks, newTaskData],
      }
    }

    case TasksActionTypes.REMOVE_TASK: {
      const newStateTasks = state.tasks.filter((task) => task.id !== action.payload.id)

      return {
        tasks: newStateTasks,
      }
    }

    case TasksActionTypes.COMPLETED_TASK: {
      const newStateTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          const taskCompleted: TaskProps = {
            ...task,
            status: 'finished',
          }

          return taskCompleted
        } else {
          return task
        }
      })

      return {
        tasks: newStateTasks,
      }
    }

    default: {
      return state
    }
  }
}
