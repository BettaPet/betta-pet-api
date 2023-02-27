import ProductDTO from 'src/dtos/product/Product.dto';
import { ProductService } from './../services/product.service';
import { Controller, Post, Body, HttpCode} from '@nestjs/common';
import { Delete, Get, Param, Put } from '@nestjs/common/decorators';

@Controller("/products")
export default class ProductController {
  constructor(
    private readonly productService: ProductService
  ) {}

  @Post()
  @HttpCode(201)
  async create(@Body() Product: ProductDTO) {
    return await this.productService.create(Product);
  }

  @Put("/:id")
  @HttpCode(200)
  async update(@Body() payload: ProductDTO, @Param("id") id) {
    return await this.productService.update(id, payload);
  }

  @Get()
  @HttpCode(200)
  async getAll() {
    return await this.productService.getAll();
  }

  @Get("/:id")
  @HttpCode(200)
  async getById(@Param("id") id) {
    return await this.productService.getById(id);
  }

  @Delete("/:id")
  @HttpCode(200)
  async deleteById (@Param("id") id) {
    return await this.productService.deleteById(id);
  }
}