import PetDTO from 'src/dtos/pet/pet.dto';
import { PetService } from './../services/pet.service';
import { Controller, Post, Body, HttpCode} from '@nestjs/common';
import { Delete, Get, Param, Put } from '@nestjs/common/decorators';

@Controller("/pets")
export default class PetController {
  constructor(
    private readonly petService: PetService
  ) {}

  @Post()
  @HttpCode(201)
  async create(@Body() pet: PetDTO) {
    return await this.petService.create(pet);
  }

  @Put("/:id")
  @HttpCode(200)
  async update(@Body() payload: PetDTO, @Param("id") id) {
    return await this.petService.update(id, payload);
  }

  @Get()
  @HttpCode(200)
  async getAll() {
    return await this.petService.getAll();
  }

  @Get("/:id")
  @HttpCode(200)
  async getById(@Param("id") id) {
    return await this.petService.getById(id);
  }

  @Delete("/:id")
  @HttpCode(200)
  async deleteById (@Param("id") id) {
    return await this.petService.deleteById(id);
  }
}