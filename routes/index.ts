import { NextFunction, Request, Response, Router } from 'express';
import path from 'path';

const indexRouter = Router();

/* GET home page. */
indexRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile('index.html');
});

export default indexRouter;