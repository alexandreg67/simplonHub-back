import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { Category } from 'src/category/entities/category.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class StoreService {
  constructor(
    // Injection du repository pour l'entité Store
    @InjectRepository(Store) private storeRepository: Repository<Store>,
    // Injection du repository pour l'entité Category
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(createStoreDto: CreateStoreDto): Promise<Store> {
    const store = new Store();

    // Copie des propriétés du DTO directement dans l'objet store
    Object.assign(store, createStoreDto);

    // Récupération des catégories à partir des identifiants fournis
    const categories = await this.categoryRepository.find({
      where: {
        id: In(createStoreDto.category_id),
      },
    });

    // Vérification si toutes les catégories ont été trouvées
    if (categories.length !== createStoreDto.category_id.length) {
      throw new Error(
        "Certaines catégories fournies ne sont pas valides ou n'existent pas.",
      );
    }

    // Association des catégories au magasin
    store.categories = categories;

    // Sauvegarde du magasin avec les catégories associées
    return await this.storeRepository.save(store);
  }

  // Méthode asynchrone pour récupérer tous les magasins avec leurs catégories associées
  async findAll() {
    return await this.storeRepository.find();
  }

  async findOne(id: number) {
    const found = await this.storeRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException('Etablissement non trouvé');
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
      throw new NotFoundException('Etablissement non trouvé');
    }

    return this.storeRepository.remove(storeToRemove);
  }
}



