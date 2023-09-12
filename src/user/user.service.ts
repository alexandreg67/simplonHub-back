import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/role/entities/role.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new User();

    // Copie des propriétés du DTO directement dans l'objet newUser
    Object.assign(newUser, createUserDto);

    // Récupération du rôle par défaut
    const defaultRole = await this.roleRepository.findOne({
      where: { role: 'user' },
    });

    // Vérification si le rôle par défaut a été trouvé
    if (!defaultRole) {
      throw new NotFoundException('Default role not found');
    }

    // Association du rôle par défaut et de la date d'inscription à newUser
    newUser.date_in = new Date();
    newUser.role_id = defaultRole.id;

    // Sauvegarde du nouvel utilisateur avec le rôle associé
    return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const found = await this.userRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException('User not found');
    }
    return found;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userToUpdate = await this.findOne(id);
    Object.assign(userToUpdate, updateUserDto);
    return this.userRepository.save(userToUpdate);
  }

  async remove(id: number) {
    const userToRemove = await this.findOne(id);
    if (!userToRemove) {
      throw new NotFoundException('User not found');
    }
    return this.userRepository.remove(userToRemove);
  }
}

