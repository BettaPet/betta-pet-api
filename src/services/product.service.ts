import ProductDTO  from 'src/dtos/product/Product.dto';
import { IProductRepository, IPRODUCT_REPOSITORY } from './../repositories/product/IProductRepository';
import Product from 'src/entities/Product.entity';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(
    @Inject(IPRODUCT_REPOSITORY)
    private productRepository: IProductRepository
    ){ }

  async create (productDTO: ProductDTO) {

    try {
      const product = new Product(productDTO);
  
      return await this.productRepository.create(product);
    } catch (error) {
      throw error;
    }
  }

  async update (id: string, payload: ProductDTO) {
    try {
      return await this.productRepository.updateProductById(id, payload);
    } catch (error) {
      throw error;
    }
  }

  async getAll () {
    try {
      return await this.productRepository.getAllProducts();
    } catch (error) {
      throw error;
    }
  }

  async getById (id: string) {
    try {
      return await this.productRepository.getProductById(id);
    } catch (error) {
      throw error;
    }
  }

  async deleteById (id: string) {
    try {
      return await this.productRepository.deleteProductById(id);
    } catch (error) {
      throw error;
    }
  }
}
