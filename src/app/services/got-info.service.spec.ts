import { TestBed } from '@angular/core/testing';

import { GotInfoService } from './got-info.service';

describe('GotInfoService', () => {
  let service: GotInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GotInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
