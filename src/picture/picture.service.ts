import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Picture } from './entities/picture.entity';

@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(Picture)
    private readonly pictureRepository: Repository<Picture>,
  ) {}
  create(createPictureDto: CreatePictureDto) {
    const newPicture = this.pictureRepository.create(createPictureDto);
    return this.pictureRepository.save(newPicture);
  }

  async findAll() {
    return await this.pictureRepository.find();
  }

  findOne(id: number) {
    const found = this.pictureRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException(`Picture #${id} not found`);
    }
    return found;
  }

  update(id: number, updatePictureDto: UpdatePictureDto) {
    const pictureToUpdate = this.findOne(id);
    Object.assign(pictureToUpdate, updatePictureDto);
    return pictureToUpdate;
  }

  remove(id: number) {
    return `This action removes a #${id} picture`;
  }
}
