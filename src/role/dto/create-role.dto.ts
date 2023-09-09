import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateRoleDto {
  @ApiProperty()
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  role: string;
}