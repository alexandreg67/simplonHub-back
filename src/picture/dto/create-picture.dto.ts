import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePictureDto {
  @ApiProperty()
  @IsString()
   @MaxLength(255)
   @IsNotEmpty()
  name: string;

  @ApiProperty()
   @IsString()
   @MaxLength(10)
   @IsNotEmpty()
  type: string;

  @ApiProperty()
  @IsString()
   @MaxLength(255)
   @IsNotEmpty()
  path: string;
}