import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateStoreDto {
  category_ids(category_ids: any) {
    throw new Error('Method not implemented.');
  }
  categories(categories: any) {
    throw new Error('Method not implemented.');
  }
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
  number: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  street: string;

  @ApiProperty()
  @IsString()
  @MaxLength(150)
  city: string;

  @ApiProperty()
  @IsString()
  @MaxLength(5)
  zip: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  web: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  map: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty()
  picture_id: number;

  @ApiProperty()
  @IsNotEmpty()
  categoryIds: number[];
}
