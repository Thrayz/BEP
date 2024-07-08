import { TestBed } from '@angular/core/testing';

import { HideIdResolver } from './hide-id.resolver';

describe('HideIdResolver', () => {
  let resolver: HideIdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HideIdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
