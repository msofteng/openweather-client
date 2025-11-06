import { Request, Response } from 'express'

const indexController = {
  /**
   * Mostra a página inicial
   * 
   * @param req dados da requisição
   * @param res dados da resposta
   */
  homePage: (req: Request, res: Response) => {
    res.sendFile('index.html')
  }
}

export default indexController