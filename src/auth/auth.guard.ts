import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validAuth =
      'Bearer 99e4c497d8b4c049ce41e71ff04055adc01714bccdf2f901e4c1d16ffabcef571398fa2b416ddc1037a98c4040c2f277c1bbb2dbc647ed65a2acaf657ac229ec';
    const request: Request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    if (authorization !== validAuth)
      throw new HttpException('Usuario no autorizado', HttpStatus.UNAUTHORIZED);
    return true;
  }
}
