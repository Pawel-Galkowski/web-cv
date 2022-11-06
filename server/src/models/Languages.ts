import { Schema, model } from 'mongoose'

const LanguagesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
})

export default model('languages', LanguagesSchema)
