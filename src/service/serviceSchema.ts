import { gql } from 'apollo-server-express'

export const ServiceTypeDefs = gql`
  type Task {
    _id: ID
    title: String
    description: String
  }

  input TaskInput {
    title: String
    description: String
  }

  type Query {
    getAllTasks: [Task]
    getTask(_id: ID!): Task
  }

  type Mutation {
    createTask(title: String!, description: String): Task
    deleteTask(_id: ID!): String
    updateTask(_id: ID!, task: TaskInput): Task
  }
`
