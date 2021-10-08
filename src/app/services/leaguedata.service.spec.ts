import { TestBed } from '@angular/core/testing';

import { LeaguedataService } from './leaguedata.service';

describe('LeaguedataService', () => {
  let service: LeaguedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaguedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
