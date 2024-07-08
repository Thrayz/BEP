import { TestBed } from '@angular/core/testing';

import { DreService } from './dre.service';

describe('DreService', () => {
  let service: DreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
