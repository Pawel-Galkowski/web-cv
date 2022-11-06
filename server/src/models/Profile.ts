import { Schema, model } from 'mongoose'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Languages from './Languages'

const ProfileSchema = new Schema({
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
  contact: Contact,
  experience: Experience,
  education: Education,
  languages: Languages,
  interests: [{
    type: String,
  }]
})

export default model('profile', ProfileSchema)
