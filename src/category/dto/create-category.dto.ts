import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength} from "class-validator";


export class CreateCategoryDto {

    
    @ApiProperty()
    @IsString()
    @MaxLength(150)        
    category: string;
 }

