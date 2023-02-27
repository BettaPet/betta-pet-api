import { PrismaModule } from './modules/prisma.module';
import { CustomerModule } from './modules/customer.module';
import { Module } from '@nestjs/common';
import { PetModule } from './modules/pet.module';
import { ProductModule } from './modules/product.module';

@Module({
  imports: [
    PrismaModule,
    CustomerModule,
    ProductModule,
    PetModule
  ],
})
export class AppModule {}
