import { Router } from 'express'

import indexController from '@controllers/index.controller'

const indexRouter = Router()

/* GET home page. */
indexRouter.get('/', indexController.homePage)
indexRouter.get('/weather', indexController.buscarPrevisao)
indexRouter.get('/city', indexController.buscarCidade)

export default indexRouter