import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/role/entities/role.entity';

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
}
