import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { CustomerModule } from './customer/customer.module';
import { InvoiceModule } from './invoice/invoice.module';
import { RequestMiddleware } from './middlewares/request.middleware';

@Module({
  imports: [CustomerModule, InvoiceModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestMiddleware)
      .forRoutes(
        { path: 'customer/:uuid', method: RequestMethod.ALL },
        { path: 'invoice/:uuid', method: RequestMethod.ALL },
      );
  }
}
