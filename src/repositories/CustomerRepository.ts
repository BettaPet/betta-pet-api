import Customer  from 'src/entities/Customer.entity';
import { PrismaService } from '../configs/prisma.service';
import { Injectable } from '@nestjs/common';
import { IcustomerRepository } from './interfaces/ICustomerRepository';

@Injectable()
export class CustomerRepository implements IcustomerRepository{
    constructor(private prismaService: PrismaService){ }

    create(customer: Customer): Promise<Customer> {
        return this.prismaService.customer.create({
            data: customer
        });
    }
}