import ProductDTO from 'src/dtos/product/Product.dto';
import Product from 'src/entities/Product.entity';
import { IProductRepository } from './IProductRepository';
import { PrismaService } from '../../configs/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository implements IProductRepository {
    constructor(private prismaService: PrismaService){ }

    create(product: Product): Promise<Product> {
        return this.prismaService.product.create({
            data: product
        });
    }

    updateProductById(id: string, payload: ProductDTO): Promise<Product> {
        return this.prismaService.product.update({
            where: {
                id: id
            },
            data: payload
        });
    }

    getAllProducts(): Promise<Product[]> {
        return this.prismaService.product.findMany();
    }

    getProductById(id: string): Promise<Product> {
        return this.prismaService.product.findUnique({
            where: {
                id: id
            }
        });
    }

    deleteProductById(id: string): Promise<Product> {
        return this.prismaService.product.delete({
            where: {
                id: id
            }
        });
    }
}