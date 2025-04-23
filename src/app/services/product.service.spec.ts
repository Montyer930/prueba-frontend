import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['getCompanyId']);
    authServiceSpy.getCompanyId.and.returnValue(1);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
        { provide: AuthService, useValue: authServiceSpy }
      ]
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debe crear un producto', async () => {
    const productData = {
      nombre: 'Mouse Pro',
      categoria: 'Accesorios',
      precio: 120,
      compania_id: 1
    };

    const expectedResponse = { ...productData, id: 1 };

    service.createProduct(productData).then(response => {
      expect(response).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(`${environment.baseApiUrl}/productos`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ producto: productData });
    req.flush(expectedResponse);
  });
});
// Test para el método getProducts