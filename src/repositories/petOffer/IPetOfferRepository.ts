import PetOfferDTO from "src/dtos/petOffer/PetOfferDTO"
import PetOffer from "src/entities/PetOffer.entity"

export const IPETOFFER_REPOSITORY = "IPETOFFER_REPOSITORY"
export interface IPetOfferRepository {
    create(petOffer: PetOfferDTO): Promise<PetOffer>
    updatePetOfferById(id: string, payload: PetOfferDTO): Promise<PetOffer>
    getAllPetOffers(): Promise<PetOffer[]>
    getPetOfferById(id: string): Promise<PetOffer>
    deletePetOfferById(id: string): Promise<PetOffer>
}