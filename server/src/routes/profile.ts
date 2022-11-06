import Express, { Request, Response } from 'express'
// import { check, validationResult } from 'express-validator';

const router = Express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send({ message: 'hello world' })
})

export default router
