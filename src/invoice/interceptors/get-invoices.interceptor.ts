import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Invoice } from '../interfaces';

@Injectable()
export class OutBrandGet implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((invoices: Invoice[]) => {
        invoices.forEach((invoice) => {
          invoice.products.forEach((product) => {
            if (!product.brand) {
              product.brand = null;
            }
          });
        });
        return invoices;
      }),
    );
  }
}
