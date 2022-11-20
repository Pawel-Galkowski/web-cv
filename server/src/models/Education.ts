import { Schema, model } from 'mongoose'

const EducationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  project: [
    {
      type: String,
      required: true,
    },
  ],
  school: {
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
})

export default model('Education', EducationSchema)
