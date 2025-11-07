import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import indexRouter from '@routes/index.router'
import usersRouter from '@routes/users.router'
import dataSource from '@configs/data-source'
import swaggerOptions from '@configs/swagger'
import config from '@configs/env'

import 'reflect-metadata'

const app = express()
const swaggerDocs = swaggerJSDoc(swaggerOptions)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(process.cwd(), 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(config.port)

dataSource.initialize().then(data => {
  if (data.isInitialized) {
    console.log('A fonte de dados foi inicializada com sucesso!')
  }
}).catch(err => {
  console.error(err)
})

export default app