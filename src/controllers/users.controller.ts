import { Request, Response } from 'express'

import User from '@models/user'
import userService from '@services/user.service'

const usersController = {
  /**
   * Mostra uma página inicial de integridade
   * 
   * @param {Request} req dados da requisição
   * @param {Response} res dados da resposta
   */
  homeUsers: (req: Request, res: Response) => {
    res.send('respond with a resource')
  },

  /**
   * Mostra todos os usuários do sistema
   * 
   * @param {Request} req dados da requisição
   * @param {Response} res dados da resposta
   * 
   * @returns uma lista de usuários (se tiver o nome de busca)
   * @returns uma mensagem de erro (se não tiver o nome de busca)
   */
  listUsers: async (
    req: Request<never, never, never, { nome?: string }>,
    res: Response<User[] | { message: string }>
  ): Promise<void> => {
    try {
      const usuarios = await userService.listarUsuarios(req.query.nome)
      res.send(usuarios)
    } catch (error) {
      res.status(400).json({
        message: error instanceof Error ? error.message : String(error)
      })
    }
  }
}

export default usersController