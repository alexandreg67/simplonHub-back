import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength } from "class-validator";

export class CreateUserDto {
  
@ApiProperty()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
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
  user_id: number;

  @ApiProperty()
  picture_id: number;
}