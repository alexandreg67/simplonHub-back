"@nestjs/swagger";

import { ApiProperty } from "@nestjs/swagger";

export class CreatePictureDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  path: string;
}