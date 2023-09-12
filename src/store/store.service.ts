import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { In, Repository } from 'typeorm';
import { Store } from './entities/store.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';
import { NotFoundException } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';

export class StoreService {
  constructor(
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createStoreDto: CreateStoreDto) {
    const store = new Store();

    Object.assign(store, createStoreDto);

    // Récupération des catégories à partir des identifiants fournis
    const categories = await this.categoryRepository.find({
      where: {
        id: In(createStoreDto.category_id),
      },
    });

    return this.storeRepository.save(store);
  }

  async findAll() {
    return await this.storeRepository.find();
  }

  async findOne(id: number) {
    const found = await this.storeRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException(`Etablissement #${id} non trouvé`);
    }
    return found;
  }

  async update(id: number, updateStoreDto: UpdateStoreDto) {
    const storeToUpdate = await this.findOne(id);
    Object.assign(storeToUpdate, updateStoreDto);
    return this.storeRepository.save(storeToUpdate);
  }

  async remove(id: number) {
    const storeToRemove = await this.findOne(id);
    if (!storeToRemove) {
      throw new NotFoundException(`Etablissement #${id} non trouvé`);
    }
    return this.storeRepository.remove(storeToRemove);
  }
}
