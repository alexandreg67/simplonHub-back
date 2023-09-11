import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './entities/store.entity';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createStoreDto: CreateStoreDto): Promise<Store> {
    const store = new Store();   
    Object.assign(store, createStoreDto);    
    const categories = await this.categoryRepository.findByIds(
      createStoreDto.categoryIds,
    );   
    if (categories.length !== createStoreDto.categoryIds.length) {
      throw new Error(
        "Certaines catégories fournies ne sont pas valides ou n'existent pas.",
      );
    }   
    store.categories = categories;    
    return await this.storeRepository.save(store);
  }

  async findAll() {
    return await this.storeRepository.find();
  }

  async findOne(id: number) {
    const found = await this.storeRepository.findOneBy({ id });
    if (!found) {
      throw new Error(`Le magasin d'id ${id} n'existe pas.`);
    }
    return found;
  }

  async update(id: number, updateStoreDto: UpdateStoreDto) {
    const storeToUpdate = await this.findOne(id);
    Object.assign(storeToUpdate, updateStoreDto);
    return await this.storeRepository.save(storeToUpdate);
  }

  async remove(id: number) {
    const found = await this.findOne(id);
    if (!found) {
      throw new Error(`Le magasin d'id ${id} n'existe pas.`);
    }
    return await this.storeRepository.remove(found);
  }
}
