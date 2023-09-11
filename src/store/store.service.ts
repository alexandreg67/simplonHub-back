import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { Category } from 'src/category/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoreService {
  constructor(
    // Injection du repository pour l'entité Store
    @InjectRepository(Store) private storeRepository: Repository<Store>,
    // Injection du repository pour l'entité Category
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  create(createStoreDto: CreateStoreDto) {
    return 'This action adds a new store';
  }

  // Méthode asynchrone pour récupérer tous les magasins avec leurs catégories associées
  async findAll() {
    return await this.storeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
