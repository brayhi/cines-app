import { TestBed } from '@angular/core/testing';

import { CinesService } from './cines.service';

describe('CinesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CinesService = TestBed.get(CinesService);
    expect(service).toBeTruthy();
  });
});
