import { PrismaModule } from './modules/prisma.module';
import { CustomerModule } from './modules/customer.module';
import { Module } from '@nestjs/common';
import { PetModule } from './modules/pet.module';
import { ProductModule } from './modules/product.module';
import { PetOfferModule } from './modules/petOffer.module';

@Module({
  imports: [
    PrismaModule,
    CustomerModule,
    ProductModule,
    PetOfferModule,
    PetModule
  ],
})
export class AppModule {}
