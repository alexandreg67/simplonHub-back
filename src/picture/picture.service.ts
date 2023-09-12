import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Picture } from './entities/picture.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(Picture) private pictureRepository: Repository<Picture>,
  ) {}

  async create(createPictureDto: CreatePictureDto): Promise<Picture> {
    const picture = new Picture();

    // Copie des propriétés du DTO directement dans l'objet picture
    Object.assign(picture, createPictureDto);

    // Sauvegarde de l'image
    return await this.pictureRepository.save(picture);
  }

  async findAll() {
    return await this.pictureRepository.find();
  }

  async findOne(id: number) {
    const found = await this.pictureRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException('image non trouvée');
    }
    return found;
  }

  async update(id: number, updatePictureDto: UpdatePictureDto) {
    const pictureToUpdate = await this.findOne(id);
    Object.assign(pictureToUpdate, updatePictureDto);
    return this.pictureRepository.save(pictureToUpdate);
  }

  async remove(id: number) {
    const pictureToRemove = await this.findOne(id);
    if (!pictureToRemove) {
      throw new NotFoundException('Etablissement non trouvé');
    }

    return this.pictureRepository.remove(pictureToRemove);
  }
}
