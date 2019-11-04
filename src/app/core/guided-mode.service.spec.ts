import { TestBed } from '@angular/core/testing';

import { GuidedModeService } from './guided-mode.service';

describe('GuidedModeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuidedModeService = TestBed.get(GuidedModeService);
    expect(service).toBeTruthy();
  });
});
