import { connect } from 'mongoose'

export const connectDB = async () => {
  try {
    await connect(
      'mongodb+srv://cheo:josephF20@cluster0.ij5uu40.mongodb.net/?retryWrites=true&w=majority'
    )
    console.log('Mongodb connected')
  } catch (error) {
    console.error(error)
  }
}
