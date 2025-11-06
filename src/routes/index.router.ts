import { Router } from 'express'

import indexController from '@controllers/index.controller'

const indexRouter = Router()

/* GET home page. */
indexRouter.get('/', indexController.homePage)

export default indexRouter