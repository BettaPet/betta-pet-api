import { v4 as uuid } from 'uuid'

export default class Customer {
    id: string    
    name: string
    cpf: string
    email: string    
    identityNumber: string
    addressState: string
    addressStreet: string
    addressCountry: string
    cep: string
    createdAt: Date
    updatedAt?: Date
    
    constructor(
        props: Omit<Customer, 'id' | 'createdAt'>,
        id?: string,
    ) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuid()
        }
    }
  }
    
