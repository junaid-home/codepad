export const PORT = process.env['PORT'] || 9191

export const JWT_KEY = process.env['JWT_KEY']

export const COOKIE_SECRET = process.env['COOKIE_SECRET']

export const NODE_ENV = process.env['NODE_ENV'] || 'development'

export const FRONTEND_DOMAIN = process.env['FRONTEND_DOMAIN'] || 'http://localhost:3000'

export const DATABASE_URL =
  process.env['DATABASE_URL'] || 'mongodb://127.0.0.1:27017/testdb'

export const JDOODLE_ENDPOINT =
  process.env['JDOODLE_ENDPOINT'] || 'https://api.jdoodle.com/v1/execute'

export const JDOODLE_CLIENT_ID = process.env['JDOODLE_CLIENT_ID']

export const JDOODLE_CLIENT_SECRET = process.env['JDOODLE_CLIENT_SECRET']

export const GOOGLE_CLIENT_SECRET = process.env['GOOGLE_CLIENT_SECRET']

export const GOOGLE_CLIENT_ID = process.env['GOOGLE_CLIENT_ID']

export const GOOGLE_REDIRECT_URL = process.env['GOOGLE_REDIRECT_URL']
