import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PictureService } from './picture.service';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/guards/roles.decorator';
import { RolesEnum } from 'src/guards/role.enum';

@ApiTags('picture')
@Controller('picture')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class PictureController {
  constructor(private readonly pictureService: PictureService) {}

  @Post()
  @Roles(RolesEnum.Admin)
  create(@Body() createPictureDto: CreatePictureDto) {
    return this.pictureService.create(createPictureDto);
  }

  @Get()
  findAll() {
    return this.pictureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pictureService.findOne(+id);
  }

  @Patch(':id')
  @Roles(RolesEnum.Admin)
  update(@Param('id') id: string, @Body() updatePictureDto: UpdatePictureDto) {
    return this.pictureService.update(+id, updatePictureDto);
  }

  @Delete(':id')
  @Roles(RolesEnum.Admin)
  remove(@Param('id') id: string) {
    return this.pictureService.remove(+id);
  }
}
