import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  mail: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}
