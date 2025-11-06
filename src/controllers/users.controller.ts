import { Request, Response } from 'express'

import User from '@models/user'
import userService from '@services/user.service'

const usersController = {
  homeUsers: (req: Request, res: Response) => {
    res.send('respond with a resource')
  },
  listUsers: async (
    req: Request<never, never, never, { nome?: string }>,
    res: Response<User[] | { message: string }>
  ) => {
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