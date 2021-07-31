import express from 'express'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'
import errorHandler from './middlewares/error-handler'
import registerRoutes from './routes'
import process from 'process'
import {FRONTEND_DOMAIN, COOKIE_SECRET} from './config/env'
import ApiError from './utils/error'

const app = express()

app.use(express.json())
app.use(cookieParser(COOKIE_SECRET))
app.use(cors({origin: FRONTEND_DOMAIN, credentials: true}))
app.use(express.static(path.join(__dirname, './client')))

registerRoutes(app)
app.use(errorHandler())

process.on('uncaughtException', () => {
  throw new ApiError('Uncaught server Exception', 500)
})

app.get('*', (_req, res) => res.sendFile(path.join(__dirname, './client/index.html')))

export default app
