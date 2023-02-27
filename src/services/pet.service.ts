import Pet from 'src/entities/Pet.entity';
import PetDTO from 'src/dtos/pet/pet.dto';
import { IPetRepository, IPET_REPOSITORY } from './../repositories/pet/IPetRepository';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class PetService {
  constructor(
    @Inject(IPET_REPOSITORY)
    private PetRepository: IPetRepository
    ){ }

  async create (petDTO: PetDTO) {

    try {
      const pet = new Pet(petDTO);
  
      return await this.PetRepository.create(pet);
    } catch (error) {
      throw error;
    }
  }

  async update (id: string, payload: PetDTO) {
    try {
      return await this.PetRepository.updatePetById(id, payload);
    } catch (error) {
      throw error;
    }
  }

  async getAll () {
    try {
      return await this.PetRepository.getAllPets();
    } catch (error) {
      throw error;
    }
  }

  async getById (id: string) {
    try {
      return await this.PetRepository.getPetById(id);
    } catch (error) {
      throw error;
    }
  }

  async deleteById (id: string) {
    try {
      return await this.PetRepository.deletePetById(id);
    } catch (error) {
      throw error;
    }
  }
}
