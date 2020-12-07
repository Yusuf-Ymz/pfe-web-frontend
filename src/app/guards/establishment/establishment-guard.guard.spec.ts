import { TestBed } from '@angular/core/testing';

import { EstablishmentGuard } from './establishment-guard.guard';

describe('AuthentificationGuardGuard', () => {
  let guard: EstablishmentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EstablishmentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
