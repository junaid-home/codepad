import express from 'express'
import {getGoogleAuthUrl, handleOauthLogin} from '../route_handlers/Oauth2'

const router = express.Router()

router.route('/get/url').get(getGoogleAuthUrl)
router.route('/login').post(handleOauthLogin)

export default router
