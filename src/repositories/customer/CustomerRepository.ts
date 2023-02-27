import CustomerDTO from 'src/dtos/customer/customer.dto';
import Customer  from 'src/entities/Customer.entity';
import { PrismaService } from '../../configs/prisma.service';
import { Injectable } from '@nestjs/common';
import { IcustomerRepository } from './ICustomerRepository';

@Injectable()
export class CustomerRepository implements IcustomerRepository{
    constructor(private prismaService: PrismaService){ }

    create(customer: Customer): Promise<Customer> {
        return this.prismaService.customer.create({
            data: customer
        });
    }

    updateCustomerById(id: string, payload: CustomerDTO): Promise<Customer> {
        return this.prismaService.customer.update({
            where: {
                id: id
            },
            data: payload
        });
    }

    getAllCustomers(): Promise<Customer[]> {
        return this.prismaService.customer.findMany();
    }

    getCustomerById(id: string): Promise<Customer> {
        return this.prismaService.customer.findUnique({
            where: {
                id: id
            }
        });
    }

    deleteCustomerById(id: string): Promise<Customer> {
        return this.prismaService.customer.delete({
            where: {
                id: id
            }
        });
    }
}