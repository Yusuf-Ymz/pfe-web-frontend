import { TestBed } from '@angular/core/testing';

import { DoctorGuard } from './doctorguard.guard';

describe('DoctorguardGuard', () => {
  let guard: DoctorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DoctorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
