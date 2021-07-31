import {Express} from 'express'
import taskRouter from './task'
import userRouter from './user'
import compileRouter from './compile'
import Oauth2Router from './Oauth2'

function registerRoutes(app: Express) {
  app.use('/api/task', taskRouter)
  app.use('/api/user', userRouter)
  app.use('/api/Oauth2', Oauth2Router)
  app.use('/api/compile', compileRouter)
}

export default registerRoutes
