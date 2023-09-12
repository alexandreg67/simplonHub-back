import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Max,
} from 'class-validator';

export class CreateCommentDto {
  @ApiProperty()
  @IsNotEmpty()
  user_id: number;
  @ApiProperty()
  @IsNotEmpty()
  store_id: number;
  @IsInt()
  @ApiProperty()
  @Max(5)
  @IsOptional()
  @IsPositive()
  note: number | null;
}
