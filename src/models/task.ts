import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  description: String
})

export const taskModel = model('Task', taskSchema)
