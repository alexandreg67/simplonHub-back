import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('comment')
@Module({
  imports: [TypeOrmModule.forFeature([Comment])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
