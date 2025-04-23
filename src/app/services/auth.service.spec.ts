import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  const apiUrl = `${environment.baseApiUrl}/login`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('debe hacer login y guardar el token y el usuario', async () => {
    const mockResponse = {
      token: 'mock-token',
      user: {
        id: 1,
        correo: 'test@correo.com',
        compania_id: 1
      }
    };

    service.login('test@correo.com', '123456').then(token => {
      expect(token).toBe('mock-token');
      expect(localStorage.getItem('auth_token')).toBe('mock-token');
      expect(JSON.parse(localStorage.getItem('user')!)).toEqual(mockResponse.user);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
// Test para el método getToken