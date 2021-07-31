export const PORT = process.env['PORT'] || 9191

export const JWT_KEY = process.env['JWT_KEY'] || 'abc123'

export const COOKIE_SECRET = process.env['COOKIE_SECRET'] || 'abc123'

export const NODE_ENV = process.env['NODE_ENV'] || 'development'

export const FRONTEND_DOMAIN = process.env['FRONTEND_DOMAIN'] || 'http://localhost:3000'

export const DATABASE_URL =
  process.env['DATABASE_URL'] || 'mongodb://127.0.0.1:27017/testdb'

export const JDOODLE_ENDPOINT =
  process.env['JDOODLE_ENDPOINT'] || 'https://api.jdoodle.com/v1/execute'

export const JDOODLE_CLIENT_ID =
  process.env['JDOODLE_CLIENT_ID'] || '409f4618d9187279fae8633773cc1081'

export const JDOODLE_CLIENT_SECRET =
  process.env['JDOODLE_CLIENT_SECRET'] ||
  '3f9e5b5c2e1c79a66907357297a63c560503991a7ea1825dc64d43e2c5d314be'

export const GOOGLE_CLIENT_SECRET =
  process.env['GOOGLE_CLIENT_SECRET'] || '3vFSbMke7OLXvO1YPlXELb7b'

export const GOOGLE_CLIENT_ID =
  process.env['GOOGLE_CLIENT_ID'] ||
  '849105493588-2jfq3rckilfi18fe6k6h431hl1515992.apps.googleusercontent.com'

export const GOOGLE_REDIRECT_URL =
  process.env['GOOGLE_REDIRECT_URL'] || 'http://localhost:3000/requestGoogleToken'
