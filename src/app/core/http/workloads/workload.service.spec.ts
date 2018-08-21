import { TestBed, inject } from '@angular/core/testing';

import { WorkloadService } from './workload.service';

describe('WorkloadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkloadService]
    });
  });

  it('should be created', inject([WorkloadService], (service: WorkloadService) => {
    expect(service).toBeTruthy();
  }));
});
