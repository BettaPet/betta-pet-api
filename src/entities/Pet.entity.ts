import { v4 as uuid } from 'uuid'

export default class Pet {
    id: string    
    name: string
    breed: string    
    gender: string    
    age: string    
    photo: string    
    customerId: string    
    createdAt: Date
    updatedAt?: Date
    
    constructor(
        props: Omit<Pet, 'id' | 'createdAt'>,
        id?: string,
    ) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuid()
        }
    }
  }
    
