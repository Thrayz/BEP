import { TestBed } from '@angular/core/testing';

import { WorkflowDecisionService } from './workflow-decision.service';

describe('WorkflowDecisionService', () => {
  let service: WorkflowDecisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowDecisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
