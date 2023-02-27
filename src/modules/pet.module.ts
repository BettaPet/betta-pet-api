import { PetRepository } from './../repositories/pet/PetRepository';
import { IPET_REPOSITORY } from './../repositories/pet/IPetRepository';
import { PetService } from './../services/pet.service';
import { Module } from "@nestjs/common";
import PetController from "src/controllers/pet.controller";

@Module({
    imports: [],
    controllers: [PetController],
    providers: [
        PetService,
        { 
            provide: IPET_REPOSITORY,
            useClass: PetRepository
        },
    ]
})

export class PetModule { }