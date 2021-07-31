import {NextFunction, Request, Response} from 'express'
import taskValidator from '../validators/task'
import ApiError from '../utils/error'
import $Task from '../schema/Task'

export async function handleCreateTask(req: Request, res: Response, next: NextFunction) {
  try {
    const {error} = taskValidator(req.body)
    if (error) throw new ApiError(error.details[0]?.message, 400)

    const task = await $Task.create(req.body)
    if (!task) throw new ApiError('failed to create new task', 400)

    res.status(201).json({
      status: 'Success',
      task,
    })
  } catch (error) {
    next(error)
  }
}

export async function handleUpdateTask(req: Request, res: Response, next: NextFunction) {
  try {
    const {Id} = req.params

    const {error} = taskValidator(req.body)
    if (error) throw new ApiError(error.details[0]?.message, 400)

    const task = await $Task.findById(Id)
    if (!task) throw new ApiError(`No Task found with the id: ${Id}`, 400)

    const updated = await $Task.findByIdAndUpdate(Id, req.body)
    if (!updated) throw new ApiError('failed to update task', 400)

    res.status(201).json({
      status: 'Success',
      task: updated,
    })
  } catch (error) {
    next(error)
  }
}

export async function handleGetAllTasks(req: Request, res: Response, next: NextFunction) {
  try {
    const {Id} = req.params

    const tasks = await $Task.find({owner: Id}).sort({updatedAt: -1})

    res.status(200).json({
      status: 'Success',
      tasks,
    })
  } catch (error) {
    next(error)
  }
}

export async function handleGetSingleTask(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const {Id} = req.params

    const task = await $Task.findOne({_id: Id})

    res.status(200).json({
      status: 'Success',
      task,
    })
  } catch (error) {
    next(error)
  }
}
