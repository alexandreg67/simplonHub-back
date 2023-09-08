import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppartenanceService } from './appartenance.service';
import { CreateAppartenanceDto } from './dto/create-appartenance.dto';
import { UpdateAppartenanceDto } from './dto/update-appartenance.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags(`appartenance`)
@Controller('appartenance')
export class AppartenanceController {
  constructor(private readonly appartenanceService: AppartenanceService) {}

  @Post()
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
  update(
    @Param('id') id: string,
    @Body() updateAppartenanceDto: UpdateAppartenanceDto,
  ) {
    return this.appartenanceService.update(+id, updateAppartenanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appartenanceService.remove(+id);
  }
}
