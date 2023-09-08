import { ApiProperty } from '@nestjs/swagger';

export class CreateStoreDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  number: string | null;
  @ApiProperty()
  street: string | null;
  @ApiProperty()
  city: string | null;
  @ApiProperty()
  zip: string | null;
  @ApiProperty()
  web: string | null;
  @ApiProperty()
  map: string | null;
  @ApiProperty()
  description: string | null;
  @ApiProperty()
  user_id: number;
  @ApiProperty()
  picture_id: number | null;
}
