import { Module } from "@nestjs/common";
import CustomerController from "src/controllers/customer.controller";
import { CustomerRepository } from "src/repositories/CustomerRepository";
import { ICUSTOMER_REPOSITORY } from "src/repositories/interfaces/ICustomerRepository";
import { CustomerService } from "src/services/customer.service";

@Module({
    imports: [],
    controllers: [CustomerController],
    providers: [
        CustomerService,
        { 
            provide: ICUSTOMER_REPOSITORY,
            useClass: CustomerRepository
        },
    ]
})

export class CustomerModule { }