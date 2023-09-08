import { ApiProperty } from "@nestjs/swagger";

export class CreateStoreDto {
  @ApiProperty()
  name: string;
    
  @ApiProperty()
  phone: string;
    
  @ApiProperty()
  number: string;
    
  @ApiProperty()
  street: string;
    
  @ApiProperty()
  city: string;
    
  @ApiProperty()
  zip: string;
    
  @ApiProperty()
  web: string;
    
  @ApiProperty()
  map: string;
    
  @ApiProperty()
  description: string;
    
  @ApiProperty()
  user_id: number;
    
  @ApiProperty()
  picture_id: number;
}
