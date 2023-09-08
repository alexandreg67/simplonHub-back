import { Injectable } from '@nestjs/common';
import { CreateAppartenanceDto } from './dto/create-appartenance.dto';
import { UpdateAppartenanceDto } from './dto/update-appartenance.dto';

@Injectable()
export class AppartenanceService {
  create(createAppartenanceDto: CreateAppartenanceDto) {
    return 'This action adds a new appartenance';
  }

  findAll() {
    return `This action returns all appartenance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appartenance`;
  }

  update(id: number, updateAppartenanceDto: UpdateAppartenanceDto) {
    return `This action updates a #${id} appartenance`;
  }

  remove(id: number) {
    return `This action removes a #${id} appartenance`;
  }
}
