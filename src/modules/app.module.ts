import { PrismaService } from './../config/prisma.service';
import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';

@Module({
  providers: [
    PrismaService
  ],
})
export class AppModule {}
