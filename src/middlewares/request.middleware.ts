import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class RequestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const nuevaCadena = req.url.split('/');
    console.log('----------------------');
    console.log('Body: ', req.body);
    console.log(`UUID solicitado: ${nuevaCadena.pop()}`);
    next();
  }
}
