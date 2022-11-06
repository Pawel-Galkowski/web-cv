import { Schema, model } from 'mongoose'

const ExperienceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  data: [
    {
      avatar: String,
      description: {
        type: String,
        required: true,
      },
    },
  ],
  company: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  isPresent: {
    type: Boolean,
    default: false,
  },
  to: String,
  location: String,
  description: String,
})

export default model('experience', ExperienceSchema)
