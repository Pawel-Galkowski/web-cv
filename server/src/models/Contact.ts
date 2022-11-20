import { Schema, model } from 'mongoose'

const ContactSchema = new Schema({
  mail: String,
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
