import { Controller, Post, Body, UnauthorizedException, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.register(createAuthDto);
  }
  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ accessToken: string }> {
    return this.authService.login(loginDto);
  }
  @Post('/checktoken')
  async validateUserToken(@Req() req: any): Promise<any> {
    console.log('je suis dans post/auth/checktoken req : ', req);
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('Token non fourni');
    }

    const isValid = await this.authService.validateToken(token);
    if (isValid) {
      return { valid: true };
    } else {
      throw new UnauthorizedException('Token invalide');
    }
  }
}
