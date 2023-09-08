import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CreatePictureDto {
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  name: string;

  @IsString()
  @ApiProperty()
  @MaxLength(100)
  type: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  path: string;
}
