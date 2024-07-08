import { TestBed } from '@angular/core/testing';

import { DreFilesUploadService } from './dre-files-upload.service';

describe('DreFilesUploadService', () => {
  let service: DreFilesUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DreFilesUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
