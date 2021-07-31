import {Response, Request, NextFunction} from 'express'
import tokenizer from '../utils/tokenizer'
import ApiError from '../utils/error'

function checkAuth(req: Request, _res: Response, next: NextFunction) {
  try {
    const token = req.headers.cookie?.replace('session_id=', '')

    tokenizer.decode(token as string)

    next()
  } catch (error) {
    throw new ApiError('Invalid Session Token', 400)
  }
}

export default checkAuth
