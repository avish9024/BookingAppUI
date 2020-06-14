import { TestBed } from '@angular/core/testing';

import { FindHotelService } from './find-hotel.service';

describe('FindHotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindHotelService = TestBed.get(FindHotelService);
    expect(service).toBeTruthy();
  });
});
