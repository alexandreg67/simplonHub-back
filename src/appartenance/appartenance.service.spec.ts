import { Test, TestingModule } from '@nestjs/testing';
import { AppartenanceService } from './appartenance.service';

describe('AppartenanceService', () => {
  let service: AppartenanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppartenanceService],
    }).compile();

    service = module.get<AppartenanceService>(AppartenanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
