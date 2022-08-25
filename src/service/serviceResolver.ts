import { ApolloError } from 'apollo-server-express'

import { Task } from '../interfaces/task'
import { taskModel } from '../models/task'

export const ServiceResolvers = {
  Query: {
    getAllTasks: async () => {
      try {
        const tasks = await taskModel.find()
        return tasks
      } catch (error) {
        throw new ApolloError(error as string)
      }
    }
  },

  Mutation: {
    createTask: async (_: unknown, args: Task) => {
      const { title, description } = args
      const newTask = new taskModel({ title, description })
      try {
        await newTask.save()
        return newTask
      } catch (error) {
        throw new ApolloError(error as string)
      }
    }
  }
}
