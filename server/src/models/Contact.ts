import { Schema, model } from 'mongoose'

const ContactSchema = new Schema({
  mail: {
    type: String,
    required: true,
  },
  address: String,
  linkedin: String,
  telegram: String,
  instagram: String,
  twitter: String,
  Github: String,
  web: String,
  phone: String,
})

export default model('Languages', ContactSchema)
