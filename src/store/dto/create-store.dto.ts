import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Picture } from 'src/picture/entities/picture.entity';

export class CreateStoreDto {
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  phone: string;
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsOptional()
  number: string | null;
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsOptional()
  street: string | null;
  @ApiProperty()
  @IsString()
  @MaxLength(150)
  @IsOptional()
  city: string | null;
  @ApiProperty()
  @IsString()
  @MaxLength(5)
  @IsOptional()
  zip: string | null;
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsOptional()
  web: string | null;
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsOptional()
  map: string | null;
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsOptional()
  description: string | null;

  @ApiProperty()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty()
  @IsOptional()
  picture_id: number | null;
  @ApiProperty({ example: [1, 2, 3] })
  @IsNotEmpty()
  category_id: number[];
}
