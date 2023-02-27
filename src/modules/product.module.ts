import { ProductRepository } from './../repositories/product/ProductRepository';
import { IPRODUCT_REPOSITORY } from './../repositories/product/IProductRepository';
import { ProductService } from './../services/product.service';
import { Module } from "@nestjs/common";
import ProductController from 'src/controllers/product.controller';

@Module({
    imports: [],
    controllers: [ProductController],
    providers: [
        ProductService,
        { 
            provide: IPRODUCT_REPOSITORY,
            useClass: ProductRepository
        },
    ]
})

export class ProductModule { }