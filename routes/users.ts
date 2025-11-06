import { NextFunction, Request, Response, Router } from 'express';

const usersRouter = Router();

/* GET users listing. */
usersRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('respond with a resource');
});

usersRouter.get('/list', (req: Request<never, never, never, { nome: string }>, res: Response<{ id: number, nome: string }[]>, next: NextFunction) => {
  res.send([
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'José' },
    { id: 4, nome: 'Ana' },
    { id: 5, nome: 'Pedro' },
    { id: 6, nome: 'Marta' },
    { id: 7, nome: 'Carlos' },
    { id: 8, nome: 'Sofia' },
    { id: 9, nome: 'Rui' },
    { id: 10, nome: 'Inês' },
  ].filter((user) => user.nome.includes(req.query.nome ?? '')))
});

export default usersRouter;