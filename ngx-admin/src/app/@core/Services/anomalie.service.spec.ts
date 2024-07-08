import { TestBed } from '@angular/core/testing';

import { AnomalieService } from './anomalie.service';

describe('AnomalieService', () => {
  let service: AnomalieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnomalieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
