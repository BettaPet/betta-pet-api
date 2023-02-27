import { v4 as uuid } from 'uuid'

export default class Product {
    id: string    
    name: string
    price: number      
    petOfferId: string    
    createdAt: Date
    updatedAt?: Date
    
    constructor(
        props: Omit<Product, 'id' | 'createdAt'>,
        id?: string,
    ) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuid()
        }
    }
  }
    
