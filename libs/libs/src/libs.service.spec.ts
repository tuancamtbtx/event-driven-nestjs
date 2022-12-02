import { Test, TestingModule } from '@nestjs/testing';
import { LibsService } from './libs.service';

describe('LibsService', () => {
  let service: LibsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibsService],
    }).compile();

    service = module.get<LibsService>(LibsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
