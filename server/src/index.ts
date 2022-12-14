import Express from 'express'
import mongoose from 'mongoose'
import db from './config/mongoose'
import { default as Profile } from './routes/profile'
import { default as Auth } from './routes/auth'

const app = Express()
const { PORT = 3000 } = process.env

mongoose
  .connect(db.mongoURI, db.options)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err))

app.use('/', Auth)
app.use('/profile', Profile)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at http://localhost:${PORT}`)
})
