import { TestBed } from '@angular/core/testing';

import { AuthBackendService } from './auth-backend.service';

describe('AuthBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthBackendService = TestBed.get(AuthBackendService);
    expect(service).toBeTruthy();
  });
});
