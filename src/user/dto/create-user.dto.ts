import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { ManyToOne } from "typeorm";

export class CreateUserDto {
  
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string;
  
  @ApiProperty()
   @IsString()
  @MaxLength(255)
   @IsNotEmpty()
  firstname: string;

  @ApiProperty()
   @IsString()
  @MaxLength(255)
   @IsNotEmpty()
  pseudo: string;

  @ApiProperty()
   @IsString()
  @MaxLength(255)
  @IsEmail()
   @IsNotEmpty()
  mail: string;

  @ApiProperty()
   @IsString()
  @MaxLength(10)
  phone: string | null;

  @ApiProperty()
   @IsString()
  @MaxLength(60)
   @IsNotEmpty()
  password: string;

  

  // @ApiProperty()
  // date_in: Date | null;

  // @ApiProperty()
  // date_out: Date | null;

  // @ApiProperty()
  // role_id: number;
}