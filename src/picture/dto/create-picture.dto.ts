import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePictureDto {
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;

  @IsString()
  @ApiProperty()
  @MaxLength(100)
  @IsNotEmpty()
  type: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @IsNotEmpty()
  path: string;
}
