import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

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

  @ApiProperty({example: [1, 2]})
  @IsNotEmpty()
  category_id: number[];
}
