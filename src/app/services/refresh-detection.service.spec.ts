import { TestBed } from '@angular/core/testing';

import { RefreshDetectionService } from './refresh-detection.service';

describe('RefreshDetectionService', () => {
  let service: RefreshDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefreshDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
