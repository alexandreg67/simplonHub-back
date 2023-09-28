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
import { AppartenanceService } from './appartenance.service';
import { CreateAppartenanceDto } from './dto/create-appartenance.dto';
import { UpdateAppartenanceDto } from './dto/update-appartenance.dto';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/guards/roles.decorator';
import { RolesEnum } from 'src/guards/role.enum';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('appartenance')
@Controller('appartenance')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class AppartenanceController {
  constructor(private readonly appartenanceService: AppartenanceService) {}

  @Post()
  @Roles(RolesEnum.Admin)
  create(@Body() createAppartenanceDto: CreateAppartenanceDto) {
    return this.appartenanceService.create(createAppartenanceDto);
  }

  @Get()
  findAll() {
    return this.appartenanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appartenanceService.findOne(+id);
  }

  @Patch(':id')
  @Roles(RolesEnum.Admin)
  update(
    @Param('id') id: string,
    @Body() updateAppartenanceDto: UpdateAppartenanceDto,
  ) {
    return this.appartenanceService.update(+id, updateAppartenanceDto);
  }

  @Delete(':id')
  @Roles(RolesEnum.Admin)
  remove(@Param('id') id: string) {
    return this.appartenanceService.remove(+id);
  }
}
