import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MaxLength } from "class-validator";
import { Role } from "src/role/entities/role.entity";

export class CreateUserDto {
  
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  name: string;
  
  @ApiProperty()
   @IsString()
  @MaxLength(255)
  firstname: string;

  @ApiProperty()
   @IsString()
  @MaxLength(255)
  pseudo: string;

  @ApiProperty()
   @IsString()
  @MaxLength(255)
  @IsEmail()
  mail: string;

  @ApiProperty()
   @IsString()
  @MaxLength(10)
  phone: string | null;

  @ApiProperty()
   @IsString()
  @MaxLength(60)
  password: string;

  // @ApiProperty()
  // date_in: Date | null;

  // @ApiProperty()
  // date_out: Date | null;

  // @ApiProperty()
  // role_id: number;
}