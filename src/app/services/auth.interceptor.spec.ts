import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';

describe('authInterceptor', () => {
  const mockAuthService = {
    getToken: jasmine.createSpy('getToken'),
    apiUrl: 'test-url',
    tokenKey: 'test-key',
    http: {},
    login: jasmine.createSpy('login'),
    logout: jasmine.createSpy('logout'),
    isAuthenticated: jasmine.createSpy('isAuthenticated'),
    getCompanyId: jasmine.createSpy('getCompanyId')
  };
  const interceptor: HttpInterceptorFn = (req, next) => 
    TestBed.runInInjectionContext(() => new AuthInterceptor(mockAuthService as unknown as AuthService).intercept(req, { handle: next }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthService, useValue: mockAuthService }
      ]
    });
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
