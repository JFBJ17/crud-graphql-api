import cors from 'cors'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { connectDB } from './db/conection'
import { ServiceTypeDefs } from './service/serviceSchema'
import { ServiceResolvers } from './service/serviceResolver'

const app = express()
connectDB()
const port = process.env.PORT || 3000

app.use(cors())

async function start () {
  const server = new ApolloServer({
    typeDefs: ServiceTypeDefs,
    resolvers: ServiceResolvers
  })

  await server.start()

  server.applyMiddleware({ app })

  app.listen({ port }, () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  })
}

start()
