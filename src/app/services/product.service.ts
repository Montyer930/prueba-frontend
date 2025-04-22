import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products/products.module';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.baseApiUrl;  // URL base de la API, definida en environment.ts

  constructor(private http: HttpClient) {}

  // Método para obtener todos los productos
  async getProducts(): Promise<Product[]> {
    const url = `${this.apiUrl}/products`;  // asumiendo que la API Rails tiene endpoint /products
    try {
      // Hacemos la petición GET y esperamos la respuesta
      const products = await firstValueFrom(this.http.get<Product[]>(url));
      return products;
    } catch (error) {
      console.error('Error obteniendo productos', error);
      throw error;  // propagamos el error para manejarlo donde se llame
    }
  }

  async createProduct(data: any): Promise<Product> {
    const url = `${this.apiUrl}/products`;
    try {
      const response = await firstValueFrom(
        this.http.post<Product>(url, { product: data })
      );
      return response;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }
  
  // (Podríamos añadir más métodos: getProduct(id), createProduct(product), etc.)
}
