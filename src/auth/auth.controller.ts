import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/register')
  register(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.register(createAuthDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ accessToken: string }> {
    return this.authService.login(loginDto);
  }

  @Post('/checktoken')
  async validateUserToken(@Req() req: any): Promise<any> {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('Token non fourni');
    }

    const tokenData = await this.authService.validateToken(token);
    if (tokenData.valid) {
      const userId = tokenData.userId;
      const user = await this.userService.findOne(userId);
      console.log('je suis dans le controller et je log user : ', user);

      if (user && user.date_out !== null) {
        // Si l'utilisateur est "soft-deleted"
        return { valid: true, isDeleted: false };
      }
      return { valid: true, isDeleted: true };
    } else {
      throw new UnauthorizedException('Token invalide');
    }
  }
}
