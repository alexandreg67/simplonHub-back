import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsPositive, Max } from "class-validator";

export class CreateCommentDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  store_id: number;

  @ApiProperty()
  @IsInt()
  @Max(5)
  @IsPositive()
  @IsOptional()
  note: number;
}