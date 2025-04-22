// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.baseApiUrl;
  private tokenKey = 'auth_token';  // clave para almacenar el token en localStorage

  constructor(private http: HttpClient) {}

  // Método de login: envía credenciales y obtiene token JWT
  async login(email: string, password: string): Promise<string> {
    const url = `${this.apiUrl}/login`;  // endpoint de login del API Rails (asumido)
    const body = { email, password };
    try {
      const response = await firstValueFrom(this.http.post<{ token: string }>(url, body));
      // Suponemos que la respuesta es un objeto JSON { token: <JWT> }
      const token = response.token;
      // Guardamos el token en localStorage para usarlo posteriormente
      localStorage.setItem(this.tokenKey, token);
      return token;
    } catch (error) {
      console.error('Error en login', error);
      throw error;
    }
  }

  // Método para obtener el token almacenado (si existe)
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Método para cerrar sesión (logout)
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    // Podríamos también limpiar estado de usuario, etc.
  }
}
