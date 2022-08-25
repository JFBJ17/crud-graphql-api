import { connect } from 'mongoose'

export const connectDB = async () => {
  try {
    await connect('mongodb://localhost/tasksdb')
    console.log('Mongodb connected')
  } catch (error) {
    console.error(error)
  }
}
