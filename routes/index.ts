import { Request, Response, Router } from 'express'

const indexRouter = Router()

/* GET home page. */
indexRouter.get('/', (req: Request, res: Response) => {
  res.sendFile('index.html')
})

export default indexRouter