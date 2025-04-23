import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products/products.module';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = `${environment.baseApiUrl}/productos`; // ← usa tu endpoint

  constructor(private http: HttpClient) {}

  async getProducts(): Promise<Product[]> {
    return await firstValueFrom(this.http.get<Product[]>(`${this.apiUrl}/compania/1`));
  }

  async createProduct(data: any): Promise<Product> {
    return await firstValueFrom(this.http.post<Product>(this.apiUrl, { producto: data }));
  }
}
