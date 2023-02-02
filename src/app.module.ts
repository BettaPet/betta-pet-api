import { PrismaModule } from './modules/prisma.module';
import { CustomerModule } from './modules/customer.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    PrismaModule,
    CustomerModule
  ],
})
export class AppModule {}
