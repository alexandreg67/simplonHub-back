import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDto {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  store_id: number;

  @ApiProperty()
  note: number;
}
