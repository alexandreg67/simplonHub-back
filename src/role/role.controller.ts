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
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/guards/roles.decorator';
import { RolesEnum } from 'src/guards/role.enum';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('role')
@Controller('role')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @Roles(RolesEnum.Admin)
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Patch(':id')
  @Roles(RolesEnum.Admin)
  @Roles(RolesEnum.Admin)
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  @Roles(RolesEnum.Admin)
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
