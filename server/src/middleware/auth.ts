import { JwtPayload, verify } from 'jsonwebtoken'
import { get } from 'config'
import { Request, Response, NextFunction } from 'express'

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('x-auth-token')
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }

  try {
    const decoded = verify(token, get('jwtSecret')) as JwtPayload

    req.body.user = decoded.user
    return next()
  } catch (err) {
    return res.status(401).json({ msg: 'Token is not valid' })
  }
}

