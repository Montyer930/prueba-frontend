import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../products.module';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private productService: ProductService) {}

  async ngOnInit() {
    this.loading = true;
    this.error = null;
    try {
      // Llamamos al servicio para obtener los productos (usando async/await)
      this.products = await this.productService.getProducts();
    } catch (err) {
      this.error = 'No se pudieron cargar los productos.';
      console.error('Error al cargar productos:', err);
    } finally {
      this.loading = false;
    }
  }
}