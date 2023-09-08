import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Max,
} from 'class-validator';
import { Store } from 'src/store/entities/store.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateCommentDto {
  @ApiProperty()
  @IsNotEmpty()
  user: User;
  @ApiProperty()
  @IsNotEmpty()
  store: Store;
  @IsInt()
  @ApiProperty()
  @Max(5)
  @IsOptional()
  @IsPositive()
  note: number | null;
}
