import { Module } from '@nestjs/common';
import { AppartenanceService } from './appartenance.service';
import { AppartenanceController } from './appartenance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appartenance } from './entities/appartenance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Appartenance])],
  controllers: [AppartenanceController],
  providers: [AppartenanceService],
})
export class AppartenanceModule {}
