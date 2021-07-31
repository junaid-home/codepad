import express from 'express'
import {
  handleCreateTask,
  handleUpdateTask,
  handleGetAllTasks,
  handleGetSingleTask,
} from '../route_handlers/task'
import checkAuth from '../middlewares/auth-checker'

const router = express.Router()

router.route('/all/:Id').get(checkAuth, handleGetAllTasks)
router.route('/get/:Id').get(checkAuth, handleGetSingleTask)
router.route('/create').post(checkAuth, handleCreateTask)
router.route('/update/:Id').patch(checkAuth, handleUpdateTask)

export default router
