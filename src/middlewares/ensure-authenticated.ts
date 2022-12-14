import { environment } from '@/main/config'

import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

type IPayload = { sub: string }

export function ensureAuthenticated (req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ message: 'Token is missing.' })
  const [, token] = authHeader.split(' ')
  try {
    const { sub: user_id } = verify(token, environment.jwt.secret) as IPayload
    req.user = { id: user_id }
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token.' })
  }
}
