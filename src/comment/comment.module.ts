import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([Comment]),
  PassportModule.register({ defaultStrategy: 'jwt' }),],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
