import { Injectable, Inject } from '@nestjs/common';
import PetOfferDTO from 'src/dtos/petOffer/PetOfferDTO';
import PetOffer from 'src/entities/PetOffer.entity';
import { IPetOfferRepository, IPETOFFER_REPOSITORY } from 'src/repositories/petOffer/IPetOfferRepository';

@Injectable()
export class PetOfferService {
  constructor(
    @Inject(IPETOFFER_REPOSITORY)
    private petOfferRepository: IPetOfferRepository
    ){ }

  async create (petOfferDTO: PetOfferDTO) {

    try {
      const petOffer = new PetOffer(petOfferDTO);
  
      return await this.petOfferRepository.create(petOffer);
    } catch (error) {
      throw error;
    }
  }

  async update (id: string, payload: PetOfferDTO) {
    try {
      return await this.petOfferRepository.updatePetOfferById(id, payload);
    } catch (error) {
      throw error;
    }
  }

  async getAll () {
    try {
      return await this.petOfferRepository.getAllPetOffers();
    } catch (error) {
      throw error;
    }
  }

  async getById (id: string) {
    try {
      return await this.petOfferRepository.getPetOfferById(id);
    } catch (error) {
      throw error;
    }
  }

  async deleteById (id: string) {
    try {
      return await this.petOfferRepository.deletePetOfferById(id);
    } catch (error) {
      throw error;
    }
  }
}
