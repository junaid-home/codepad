import {Request, Response, NextFunction, CookieOptions} from 'express'
import validateUser, {validateUserCredentials} from '../validators/user'
import $User from '../schema/User'
import tokenizer from '../utils/tokenizer'
import hasher from '../utils/hasher'
import ApiError from '../utils/error'
import {NODE_ENV} from '../config/env'

const cookieOptions: CookieOptions = {
  maxAge: 1000 * 60 * 60 * 24 * 6,
  secure: NODE_ENV !== 'development',
  httpOnly: true,
}

export async function handleCreateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const {error} = validateUser(req.body)
    if (error) throw new ApiError(error.details[0]?.message, 400)

    const data = await hasher.hash(req.body.password)

    const user = await $User.create({...req.body, password: data.hash, salt: data.salt})
    if (error) throw new ApiError('Unable to create new User!', 400)

    const token = tokenizer.tokenize({id: user._id})
    user.password = undefined
    user.salt = undefined
    user.__v = undefined

    res.cookie('session_id', token, cookieOptions).status(201).json({
      status: 'Success',
      user,
    })
  } catch (error) {
    next(error)
  }
}

export async function handleLoginUser(req: Request, res: Response, next: NextFunction) {
  try {
    const {error} = validateUserCredentials(req.body)
    if (error) throw new ApiError(error.details[0]?.message, 400)

    const user = await $User.findOne({
      $or: [{username: req.body.id}, {email: req.body.email}],
    })
    if (!user) throw new ApiError('Invalid Username/Email or password', 400)

    const isValidPassword = await hasher.verifyHash(
      req.body.password,
      user.salt,
      user.password,
    )
    if (!isValidPassword) throw new ApiError('Invalid Username/Email or password', 400)

    const token = tokenizer.tokenize({id: user._id})
    user.password = undefined
    user.salt = undefined
    user.__v = undefined

    res.status(200).cookie('session_id', token, cookieOptions).json({
      status: 'Success',
      user,
    })
  } catch (error) {
    next(error)
  }
}

export async function handleLogoutUser(_req: Request, res: Response, next: NextFunction) {
  try {
    const options = {
      maxAge: 1000 * 5,
      secure: NODE_ENV !== 'development',
      httpOnly: true,
    }

    res.status(200).cookie('session_id', null, options).json({
      status: 'Success',
      user: null,
    })
  } catch (error) {
    next(error)
  }
}
