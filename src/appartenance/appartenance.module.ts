import { Module } from '@nestjs/common';
import { AppartenanceService } from './appartenance.service';
import { AppartenanceController } from './appartenance.controller';

@Module({
  controllers: [AppartenanceController],
  providers: [AppartenanceService],
})
export class AppartenanceModule {}
