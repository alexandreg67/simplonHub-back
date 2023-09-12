import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  
  ) { }
  create(createCommentDto: CreateCommentDto) {
    return 'This action adds a new comment';
  }

  async findAll() {
    return await this.commentRepository.find();
  }

  async findOne(id: number) {
    const found = await this.commentRepository.findOneBy({id: id})
    if (!found) {
      throw new NotFoundException (`Le commentaire d'id ${id} n'existe pas.`);
    }
    return found;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const commentToUpdate = await this.findOne(id);
    Object.assign(commentToUpdate, updateCommentDto);
    return this.commentRepository.save(commentToUpdate);
  }

  async remove(id: number) {
    const found = await this.findOne(id);
    if (!found) {
      throw new NotFoundException (`Le commentaire d'id ${id} n'existe pas.`);
    }
    return await this.commentRepository.remove(found);
  }
}
