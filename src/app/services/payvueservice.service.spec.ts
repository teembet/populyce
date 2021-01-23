import { TestBed } from '@angular/core/testing';

import { PayvueserviceService } from './payvueservice.service';

describe('PayvueserviceService', () => {
  let service: PayvueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayvueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
