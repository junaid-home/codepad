import {Response, Request, NextFunction} from 'express'

function errorHandler() {
  return (error: any, _req: Request, res: Response, _next: NextFunction) => {
    const statusCode = error.statusCode || 500
    const type = error.type || 'not specified'
    const message = error.message || 'Something went wrong!'

    res.json({
      status: 'Error',
      statusCode,
      type: type,
      message,
    })
  }
}

export default errorHandler
