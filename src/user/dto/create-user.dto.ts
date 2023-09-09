import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";


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
  @IsOptional()
  phone: string | null;

  @ApiProperty()
   @IsString()
  @MaxLength(60)
   @IsNotEmpty()
  password: string;

}