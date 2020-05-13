import { TestBed } from '@angular/core/testing';

import { CagegoryService } from './cagegory.service';

describe('CagegoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CagegoryService = TestBed.get(CagegoryService);
    expect(service).toBeTruthy();
  });
});
