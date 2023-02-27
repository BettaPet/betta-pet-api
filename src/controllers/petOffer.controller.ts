import { PetOfferService } from './../services/petOffer.service';
import { Controller, Post, Body, HttpCode} from '@nestjs/common';
import { Delete, Get, Param, Put } from '@nestjs/common/decorators';
import PetOfferDTO from 'src/dtos/petOffer/PetOfferDTO';

@Controller("/petOffers")
export default class PetOfferController {
  constructor(
    private readonly petOfferService: PetOfferService
  ) {}

  @Post()
  @HttpCode(201)
  async create(@Body() petOffer: PetOfferDTO) {
    return await this.petOfferService.create(petOffer);
  }

  @Put("/:id")
  @HttpCode(200)
  async update(@Body() payload: PetOfferDTO, @Param("id") id) {
    return await this.petOfferService.update(id, payload);
  }

  @Get()
  @HttpCode(200)
  async getAll() {
    return await this.petOfferService.getAll();
  }

  @Get("/:id")
  @HttpCode(200)
  async getById(@Param("id") id) {
    return await this.petOfferService.getById(id);
  }

  @Delete("/:id")
  @HttpCode(200)
  async deleteById (@Param("id") id) {
    return await this.petOfferService.deleteById(id);
  }
}