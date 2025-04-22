import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent {
  productForm: FormGroup;
  submitted = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.productForm.valid) {
      try {
        await this.productService.createProduct(this.productForm.value);
        await this.router.navigate(['/products']);
        window.location.reload();
      } catch (err) {
        this.error = 'Error al crear el producto';
        console.error('Error creating product:', err);
      }
    }
  }
}