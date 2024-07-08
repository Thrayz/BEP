import { TestBed } from '@angular/core/testing';

import { MaitriseService } from './maitrise.service';

describe('MaitriseService', () => {
  let service: MaitriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaitriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
