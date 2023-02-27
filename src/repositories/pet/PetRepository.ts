import PetDTO from 'src/dtos/pet/pet.dto';
import Pet from 'src/entities/Pet.entity';
import { PrismaService } from '../../configs/prisma.service';
import { Injectable } from '@nestjs/common';
import { IPetRepository } from './IPetRepository';

@Injectable()
export class PetRepository implements IPetRepository{
    constructor(private prismaService: PrismaService){ }

    create(pet: Pet): Promise<Pet> {
        return this.prismaService.pet.create({
            data: pet
        });
    }

    updatePetById(id: string, payload: PetDTO): Promise<Pet> {
        return this.prismaService.pet.update({
            where: {
                id: id
            },
            data: payload
        });
    }

    getAllPets(): Promise<Pet[]> {
        return this.prismaService.pet.findMany();
    }

    getPetById(id: string): Promise<Pet> {
        return this.prismaService.pet.findUnique({
            where: {
                id: id
            }
        });
    }

    deletePetById(id: string): Promise<Pet> {
        return this.prismaService.pet.delete({
            where: {
                id: id
            }
        });
    }
}