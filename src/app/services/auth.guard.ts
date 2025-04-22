// src/app/services/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.authService.getToken();
    if (!token) {
      // Si no hay token, redirigir a login
      this.router.navigate(['/login']);
      return false;
    }

    // Si la ruta tiene metadata de roles requeridos, la obtenemos
    const requiredRoles = route.data['roles'] as Array<string> | undefined;
    if (requiredRoles && requiredRoles.length > 0) {
      // Decodificamos el token JWT para obtener el rol del usuario
      try {
        const payloadBase64 = token.split('.')[1];  // la segunda parte del JWT es el payload
        const payloadJson = atob(payloadBase64);
        const payload = JSON.parse(payloadJson);
        const userRole: string = payload.role || payload.roles;  // asumiendo el token tiene un campo 'role' o 'roles'

        // Verificar si el rol del usuario está dentro de los roles requeridos
        const hasRole = requiredRoles.includes(userRole);
        if (!hasRole) {
          // Rol no autorizado para esta ruta
          this.router.navigate(['/']);
          return false;
        }
      } catch (e) {
        console.error('Error al decodificar el token JWT', e);
        this.router.navigate(['/']);
        return false;
      }
    }

    // Si tenemos token, y (si se requerían roles) el usuario tiene un rol permitido, entonces permite activar la ruta
    return true;
  }
}
