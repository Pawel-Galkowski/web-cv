import { ServerApiVersion } from 'mongodb'

export default {
  mongoURI:
    'mongodb+srv://outsideCreator:Master0fN0de@cluster0.uhud1gy.mongodb.net/?retryWrites=true&w=majority',
  options: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverApi: ServerApiVersion.v1,
  },
}