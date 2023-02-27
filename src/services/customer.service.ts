import { IcustomerRepository, ICUSTOMER_REPOSITORY } from '../repositories/customer/ICustomerRepository';
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

  async update (id: string, payload: CustomerDTO) {
    try {
      return await this.customerRepository.updateCustomerById(id, payload);
    } catch (error) {
      throw error;
    }
  }

  async getAll () {
    try {
      return await this.customerRepository.getAllCustomers();
    } catch (error) {
      throw error;
    }
  }

  async getById (id: string) {
    try {
      return await this.customerRepository.getCustomerById(id);
    } catch (error) {
      throw error;
    }
  }

  async deleteById (id: string) {
    try {
      return await this.customerRepository.deleteCustomerById(id);
    } catch (error) {
      throw error;
    }
  }
}
