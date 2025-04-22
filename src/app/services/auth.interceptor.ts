import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtenemos el token actual (si existe)
    const authToken = this.authService.getToken();
    let request = req;

    if (authToken) {
      // Clonamos la petición y le añadimos la cabecera Authorization
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }
    // Pasamos la petición (modificada o no) al siguiente interceptor/manejador
    return next.handle(request);
  }
}
