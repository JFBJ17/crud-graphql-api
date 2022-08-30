import { ApolloError } from 'apollo-server-express'

import { Task, UpdateTask } from '../interfaces/task'
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
    },
    getTask: async (_: unknown, args: Task) => {
      try {
        const task = await taskModel.findById(args._id)
        return task
      } catch (error) {
        throw new ApolloError(error as string)
      }
    }
  },

  Mutation: {
    createTask: async (_: unknown, args: Task) => {
      const { title, description } = args
      const newTask = new taskModel({ title, description: description || '' })
      try {
        await newTask.save()
        return newTask
      } catch (error) {
        throw new ApolloError(error as string)
      }
    },
    deleteTask: async (_: unknown, args: Task) => {
      await taskModel.findByIdAndDelete(args._id)
      return 'Task deleted'
    },
    updateTask: async (_: unknown, args: UpdateTask) => {
      const { _id, task } = args
      const newTask = await taskModel.findByIdAndUpdate(
        _id,
        {
          $set: task
        },
        { new: true }
      )
      return newTask
    }
  }
}
