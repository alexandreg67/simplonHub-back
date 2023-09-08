import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  firstname: string;
  @ApiProperty()
  pseudo: string;
  @ApiProperty()
  mail: string;
  @ApiProperty()
  phone: string | null;
  @ApiProperty()
  password: string;
  @ApiProperty()
  date_in: Date | null;
  @ApiProperty()
  date_out: Date | null;
  @ApiProperty()
  role_id: number;
}
