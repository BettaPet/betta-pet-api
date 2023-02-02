import CustomerDTO  from 'src/dtos/customer/customer.dto';
import { Controller, Post, Body, HttpCode} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';

@Controller("/customers")
export default class CustomerController {
  constructor(
    private readonly customerService: CustomerService
  ) {}

  @Post()
  @HttpCode(201)
  async create(@Body() customer: CustomerDTO) {
    return await this.customerService.create(customer);
  }
}