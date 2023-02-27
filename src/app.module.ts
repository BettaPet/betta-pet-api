import { PrismaModule } from './modules/prisma.module';
import { CustomerModule } from './modules/customer.module';
import { Module } from '@nestjs/common';
import { PetModule } from './modules/pet.module';

@Module({
  imports: [
    PrismaModule,
    CustomerModule,
    PetModule
  ],
})
export class AppModule {}
