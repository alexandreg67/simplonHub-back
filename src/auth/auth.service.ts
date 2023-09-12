import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Role } from 'src/role/entities/role.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}
  async register(createAuthDto: CreateAuthDto) {
    const { name, firstname, pseudo, mail, phone, password } = createAuthDto;

    // hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // création d'une entité user
    const user = this.userRepository.create({
      name,
      firstname,
      pseudo,
      mail,
      phone,
      password: hashedPassword,
    });
    const defaultRole = await this.roleRepository.findOneBy({ role: 'user' }); // SELECT * FROM role WHERE role = 'user'
    if (!defaultRole) {
      throw new NotFoundException('Default role not found');
    }
    user.date_in = new Date(); // set date_in
    user.role_id = defaultRole.id; // set default role

    try {
      // enregistrement de l'entité user
      const createdUser = await this.userRepository.save(user);
      delete createdUser.password;
      return createdUser;
    } catch (error) {
      // gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException('user already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
