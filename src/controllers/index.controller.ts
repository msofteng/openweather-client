import { Request, Response } from 'express'

const indexController = {
  homePage: (req: Request, res: Response) => {
    res.sendFile('index.html')
  }
}

export default indexController