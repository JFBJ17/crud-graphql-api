export interface Task {
  _id: string | number
  title: string
  description?: string
}

export interface UpdateTask extends Pick<Task, '_id'> {
  task: Omit<Partial<Task>, '_id'>
}
