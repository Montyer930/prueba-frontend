import { TestBed } from '@angular/core/testing';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  const mockRoute = {} as ActivatedRouteSnapshot;
  const mockState = {} as RouterStateSnapshot;
  const mockRouter = { navigate: jasmine.createSpy('navigate') };
  const mockAuthService = { getToken: jasmine.createSpy('getToken') };
  
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => TestBed.inject(AuthGuard).canActivate(mockRoute, mockState));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: mockRouter },
        { provide: AuthService, useValue: mockAuthService }
      ]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
