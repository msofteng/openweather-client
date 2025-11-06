import { Router } from 'express'

import usersController from '@controllers/users.controller'

const usersRouter = Router()

usersRouter.get('/', usersController.homeUsers)
usersRouter.get('/list', usersController.listUsers)

export default usersRouter