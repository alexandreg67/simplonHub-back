import { Module } from '@nestjs/common';
import { AppartenanceService } from './appartenance.service';
import { AppartenanceController } from './appartenance.controller';
import { Appartenance } from './entities/appartenance.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Appartenance])],
  controllers: [AppartenanceController],
  providers: [AppartenanceService],
})
export class AppartenanceModule {}
