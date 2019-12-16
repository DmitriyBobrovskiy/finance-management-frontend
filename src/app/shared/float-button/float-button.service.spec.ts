import { TestBed } from '@angular/core/testing';

import { FloatButtonService } from './float-button.service';

describe('NgxFloatButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FloatButtonService = TestBed.get(FloatButtonService);
    expect(service).toBeTruthy();
  });
});
