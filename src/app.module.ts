import { PrismaModule } from './modules/prisma.module';
import { CustomerModule } from './modules/customer.module';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    PrismaModule,
    CustomerModule
  ],
})
export class AppModule {}
