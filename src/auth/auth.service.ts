import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/role/entities/role.entity';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async register(createAuthDto: CreateAuthDto) {
    const { name, firstname, pseudo, mail, phone, password } = createAuthDto;

    // Hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Création d'une entité user
    const user = this.userRepository.create({
      name,
      firstname,
      pseudo,
      mail,
      phone,
      password: hashedPassword,
    });

    // Création du role user par defaut
    const defaultRole = await this.roleRepository.findOneBy({ role: 'user' });
    if (!defaultRole) {
      throw new NotFoundException('Role not found');
    }

    // ajout des dates et du role
    user.date_in = new Date();
    user.role_id = defaultRole.id;

    try {
      // enregistrement de l'entité user en base de données
      const createdUser = await this.userRepository.save(user);
      delete createdUser.password;
      return createdUser;
    } catch (error) {
      // Gestion des erreurs
      if (error.code === '23505') {
        throw new Error('User already exist.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async login(loginDto: LoginDto) {
    const { mail, password } = loginDto;
    const user = await this.userRepository.findOneBy({ mail });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { mail };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException(
        'Ces identifiants ne sont pas bons, déso...',
      );
    }
  }

  async validateToken(token: string): Promise<boolean> {
    try {
      const payload = this.jwtService.verify(token); // Vérifie le token
      console.log('payload : ', payload);
      return true;
    } catch (error) {
      return false;
    }
  }
}
