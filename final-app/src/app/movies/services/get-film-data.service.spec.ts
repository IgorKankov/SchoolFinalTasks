import { TestBed } from '@angular/core/testing';

import { GetFilmDataService } from './get-film-data.service';

describe('GetFilmDataService', () => {
  let service: GetFilmDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFilmDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
