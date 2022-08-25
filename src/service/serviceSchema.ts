import { gql } from 'apollo-server-express'

export const ServiceTypeDefs = gql`
  type Task {
    _id: ID
    title: String
    description: String
  }

  type Query {
    getAllTasks: [Task]
  }

  type Mutation {
    createTask(title: String, description: String): Task
  }
`
