import { TestBed } from '@angular/core/testing';

import { MapAreaService } from './map-area.service';

describe('MapAreaService', () => {
  let service: MapAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
