import { PrismaService } from '../../configs/prisma.service';
import { Injectable } from '@nestjs/common';
import PetOffer from 'src/entities/PetOffer.entity';
import PetOfferDTO from 'src/dtos/petOffer/PetOfferDTO';
import { IPetOfferRepository } from './IPetOfferRepository';

@Injectable()
export class PetOfferRepository implements IPetOfferRepository {
    constructor(private prismaService: PrismaService){ }

    create(petOffer: PetOffer): Promise<PetOffer> {
        return this.prismaService.petOffer.create({
            data: petOffer
        });
    }

    updatePetOfferById(id: string, payload: PetOfferDTO): Promise<PetOffer> {
        return this.prismaService.petOffer.update({
            where: {
                id: id
            },
            data: payload
        });
    }

    getAllPetOffers(): Promise<PetOffer[]> {
        return this.prismaService.petOffer.findMany();
    }

    getPetOfferById(id: string): Promise<PetOffer> {
        return this.prismaService.petOffer.findUnique({
            where: {
                id: id
            }
        });
    }

    deletePetOfferById(id: string): Promise<PetOffer> {
        return this.prismaService.petOffer.delete({
            where: {
                id: id
            }
        });
    }
}