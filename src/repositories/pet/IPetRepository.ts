import PetDTO from "src/dtos/pet/pet.dto"
import Pet from "src/entities/Pet.entity"

export const IPET_REPOSITORY = "IPET_REPOSITORY"
export interface IPetRepository {
    create(pet: Pet): Promise<Pet>
    updatePetById(id: string, payload: PetDTO): Promise<Pet>
    getAllPets(): Promise<Pet[]>
    getPetById(id: string): Promise<Pet>
    deletePetById(id: string): Promise<Pet>
}