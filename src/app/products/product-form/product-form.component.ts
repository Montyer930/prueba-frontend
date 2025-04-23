
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

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

export class ProductFormComponent implements OnInit {
  @Output() productoCreado = new EventEmitter<void>();
  form!: FormGroup;
  submitted = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  ngOnInit() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(1)]],
      categoria: [''],
      compania_id: [1] // por ahora estático, o podés pasarlo por @Input
    });
  }

  async onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;

    try {
      await this.productService.createProduct(this.form.value);
      this.productoCreado.emit();
      this.form.reset({ compania_id: 1 });
      this.submitted = false;
    } catch (err) {
      this.error = 'No se pudo crear el producto.';
    }
  }
}