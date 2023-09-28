import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/guards/roles.decorator';
import { RolesEnum } from 'src/guards/role.enum';

@ApiTags('comment') // Swagger
@Controller('comment')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @Roles(RolesEnum.User, RolesEnum.Admin)
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id);
  }

  @Delete(':id')
  @Roles(RolesEnum.Admin)
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
