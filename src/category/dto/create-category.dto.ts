import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {

    @ApiProperty()
    category: string;
 }

