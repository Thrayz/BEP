import { TestBed } from '@angular/core/testing';

import { ValidationNavService } from './validation-nav.service';

describe('ValidationNavService', () => {
  let service: ValidationNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
