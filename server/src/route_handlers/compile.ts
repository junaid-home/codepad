import {Request, Response, NextFunction} from 'express'
import ApiError from '../utils/error'
import compileInputValidator from '../validators/compile'
import fetch from 'node-fetch'
import {JDOODLE_CLIENT_ID, JDOODLE_CLIENT_SECRET, JDOODLE_ENDPOINT} from '../config/env'

export async function handleCodeCompilation(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const {error} = compileInputValidator(req.body)
    if (error) throw new ApiError(error.details[0]?.message, 400)

    const response = await fetch(JDOODLE_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({
        clientId: JDOODLE_CLIENT_ID,
        clientSecret: JDOODLE_CLIENT_SECRET,
        script: req.body.content,
        language: req.body.language,
        versionIndex: JSON.stringify(req.body.versionIndex),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const results = await response.json()

    if (results.error) throw new ApiError(results.error, 400)

    res.status(200).json({
      status: 'Success',
      results,
    })
  } catch (error) {
    next(error)
  }
}
