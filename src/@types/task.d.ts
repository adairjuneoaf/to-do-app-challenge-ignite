export type TaskStatus = 'in-progress' | 'finished'

export interface TaskProps {
  description: string
  createdAt: string
  status: TaskStatus
}
