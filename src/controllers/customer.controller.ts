import CustomerDTO  from 'src/dtos/customer/customer.dto';
import { Controller, Post, Body, HttpCode} from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { Delete, Get, Param, Put } from '@nestjs/common/decorators';

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

  @Put("/:id")
  @HttpCode(200)
  async update(@Body() payload: CustomerDTO, @Param("id") id) {
    return await this.customerService.update(id, payload);
  }

  @Get()
  @HttpCode(200)
  async getAll() {
    return await this.customerService.getAll();
  }

  @Get("/:id")
  @HttpCode(200)
  async getById(@Body() payload: CustomerDTO, @Param("id") id) {
    return await this.customerService.getById(id);
  }

  @Delete("/:id")
  @HttpCode(200)
  async deleteById (@Param("id") id) {
    return await this.customerService.deleteById(id);
  }
}