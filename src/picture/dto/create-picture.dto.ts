"@nestjs/swagger";

import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength } from "class-validator";

export class CreatePictureDto {
  @ApiProperty()
  @IsString()
   @MaxLength(255)
  name: string;

  @ApiProperty()
   @IsString()
   @MaxLength(10)
  type: string;

  @ApiProperty()
   @MaxLength(255)
  path: string;
}