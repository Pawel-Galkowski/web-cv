import { Schema, model } from 'mongoose'

// Configuration of user profile and data

const ProfileSchema = new Schema({
  id: Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  contact: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Contact',
    },
  ],
  experience: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Experience',
    },
  ],
  education: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Education',
    },
  ],
  languages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Languages',
    },
  ],
  interests: [String],
})

export default model('profile', ProfileSchema)
