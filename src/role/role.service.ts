import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  //injection du repository pour pour l'entité Role
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}
  create(createRoleDto: CreateRoleDto) {
    return 'This action adds a new role';
  }

  async findAll() {
    return await this.roleRepository.find();
  }

  async findOne(id: number) {
    const found = await this.roleRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException('Etablissement non trouvé');
    }
    return found;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
