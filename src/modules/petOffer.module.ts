import { IPETOFFER_REPOSITORY } from './../repositories/petOffer/IPetOfferRepository';
import { PetOfferService } from './../services/petOffer.service';
import { Module } from "@nestjs/common";
import PetOfferController from "src/controllers/petOffer.controller";
import { PetOfferRepository } from 'src/repositories/petOffer/PetRepository';

@Module({
    imports: [],
    controllers: [PetOfferController],
    providers: [
        PetOfferService,
        { 
            provide: IPETOFFER_REPOSITORY,
            useClass: PetOfferRepository
        },
    ]
})

export class PetOfferModule { }