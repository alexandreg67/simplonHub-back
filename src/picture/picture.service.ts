import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Picture } from './entities/picture.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(Picture)
    private readonly pictureRepository: Repository<Picture>,
  ) { }

  create(createPictureDto: CreatePictureDto) {
    const picture = new Picture();
    Object.assign(picture, createPictureDto);
    return this.pictureRepository.save(picture);
  }

  async findAll() {
    return await this.pictureRepository.find();
  }

  async findOne(id: number) {
    const found =  await this.pictureRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException (`La photo d'id ${id} n'existe pas.`);
    }
    return found;
  }

  async update(id: number, updatePictureDto: UpdatePictureDto) {
    const pictureToUpdate = await this.findOne(id);
    Object.assign(pictureToUpdate, updatePictureDto);
    return this.pictureRepository.save(pictureToUpdate);
  }

  async remove(id: number) {
    const found = await this.findOne(id);
    if (!found) {
      throw new NotFoundException (`La photo d'id ${id} n'existe pas.`);
    }
    return await this.pictureRepository.remove(found);
  }
}
