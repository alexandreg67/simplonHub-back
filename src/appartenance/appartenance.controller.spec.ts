import { Test, TestingModule } from '@nestjs/testing';
import { AppartenanceController } from './appartenance.controller';
import { AppartenanceService } from './appartenance.service';

describe('AppartenanceController', () => {
  let controller: AppartenanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppartenanceController],
      providers: [AppartenanceService],
    }).compile();

    controller = module.get<AppartenanceController>(AppartenanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
