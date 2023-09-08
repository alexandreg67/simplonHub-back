import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/role/entities/role.entity";

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
    

// Uniquement ce qu'on va recevoir du front
//   @ApiProperty()
//   date_in: Date | null;
    
//   @ApiProperty()
//   date_out: Date | null;
    
//   @ApiProperty()
//   role_id: number;
