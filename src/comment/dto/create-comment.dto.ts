import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsPositive, Max } from "class-validator";

export class CreateCommentDto {
  @ApiProperty()
  @IsNotEmpty()
  user_id: number;

  @ApiProperty()
  @IsNotEmpty()
  store_id: number;

  @ApiProperty()
  @IsInt()
  @Max(5)
  @IsPositive()
  @IsOptional()
  note: number;
}