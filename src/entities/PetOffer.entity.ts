import { v4 as uuid } from 'uuid'

export default class PetOffer {
    id: string    
    description: string      
    customerId: string    
    createdAt: Date
    updatedAt?: Date
    
    constructor(
        props: Omit<PetOffer, 'id' | 'createdAt'>,
        id?: string,
    ) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuid()
        }
    }
  }
    
