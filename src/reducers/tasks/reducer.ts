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
        ...state,
        tasks: [...state.tasks, newTaskData],
      }
    }

    default: {
      return state
    }
  }
}
