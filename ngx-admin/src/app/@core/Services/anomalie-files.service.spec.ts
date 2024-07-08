import { TestBed } from '@angular/core/testing';

import { AnomalieFilesService } from './anomalie-files.service';

describe('AnomalieFilesService', () => {
  let service: AnomalieFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnomalieFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
