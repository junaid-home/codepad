import express from 'express'
import {handleCodeCompilation} from '../route_handlers/compile'
import checkAuth from '../middlewares/auth-checker'

const router = express.Router()

router.route('/').post(checkAuth, handleCodeCompilation)

export default router
