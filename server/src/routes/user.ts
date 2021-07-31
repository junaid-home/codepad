import express from 'express'
import {handleCreateUser, handleLoginUser, handleLogoutUser} from '../route_handlers/user'

const router = express.Router()

router.route('/create').post(handleCreateUser)
router.route('/login').post(handleLoginUser)
router.route('/logout').get(handleLogoutUser)

export default router
