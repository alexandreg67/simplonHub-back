import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength} from "class-validator";


export class CreateCategoryDto {

    
    @ApiProperty()
    @IsString()
    @MaxLength(150) 
    @IsNotEmpty()    
    category: string;
 }
