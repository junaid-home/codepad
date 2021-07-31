import {PORT} from './config/env'
import mongodb from './config/db'
import app from './server'
import {initializeSocketServer} from './socket'

const server = app.listen(PORT, () => console.info(`[ OK ] http://localhost:${PORT}`))

initializeSocketServer(server)
mongodb.init()
