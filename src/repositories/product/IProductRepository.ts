import ProductDTO from "src/dtos/product/Product.dto"
import Product from "src/entities/Product.entity"

export const IPRODUCT_REPOSITORY = "IPRODUCT_REPOSITORY"
export interface IProductRepository {
    create(product: Product): Promise<Product>
    updateProductById(id: string, payload: ProductDTO): Promise<Product>
    getAllProducts(): Promise<Product[]>
    getProductById(id: string): Promise<Product>
    deleteProductById(id: string): Promise<Product>
}