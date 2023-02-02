import { IcustomerRepository, ICUSTOMER_REPOSITORY } from './../repositories/interfaces/ICustomerRepository';
import { Injectable, Inject } from '@nestjs/common';
import CustomerDTO from 'src/dtos/customer/customer.dto';
import Customer from 'src/entities/Customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @Inject(ICUSTOMER_REPOSITORY)
    private customerRepository: IcustomerRepository
    ){ }

  async create (customerDto: CustomerDTO) {

    try {
      const customer = new Customer(customerDto);
  
      return await this.customerRepository.create(customer);
    } catch (error) {
      throw error;
    }
  }
}
