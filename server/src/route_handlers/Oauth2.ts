import {NextFunction, Request, Response, CookieOptions} from 'express'
import $User from '../schema/User'
import {google} from 'googleapis'
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URL,
  NODE_ENV,
} from '../config/env'
import ApiError from '../utils/error'
import tokenizer from '../utils/tokenizer'
import fetch from 'node-fetch'

const GoogleOauthClient = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URL,
)

const cookieOptions: CookieOptions = {
  maxAge: 1000 * 60 * 60 * 24 * 6,
  secure: NODE_ENV !== 'development',
  httpOnly: true,
}

export function getGoogleAuthUrl(_req: Request, res: Response, next: NextFunction) {
  try {
    const scopes = [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ]

    const url = GoogleOauthClient.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: scopes,
    })

    res.json({
      status: 'Success',
      url: url,
    })
  } catch (err) {
    next(err)
  }
}

export async function handleOauthLogin(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.body.code || typeof req.body.code !== 'string' || req.body.code.length < 10)
      throw new ApiError(
        'Code should be a string and must be greater than 10 chars!',
        400,
      )

    const {tokens} = await GoogleOauthClient.getToken(req.body.code)

    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tokens.id_token}`,
        },
      },
    )

    const googleUser = await response.json()

    let user = await $User.findOne({email: googleUser.email})
    if (!user) {
      user = await $User.create({
        firstName: googleUser.given_name,
        lastName: googleUser.family_name,
        username: googleUser.email,
        email: googleUser.email,
      })
    }

    const token = tokenizer.tokenize({id: googleUser.id})

    res.cookie('session_id', token, cookieOptions).json({
      status: 'Success',
      user: user,
    })
  } catch (err) {
    next(err)
  }
}
