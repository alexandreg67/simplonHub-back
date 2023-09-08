import { PartialType } from '@nestjs/mapped-types';
import { CreateAppartenanceDto } from './create-appartenance.dto';

export class UpdateAppartenanceDto extends PartialType(CreateAppartenanceDto) {}
