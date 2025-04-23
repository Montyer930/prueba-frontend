import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';



@NgModule({
  declarations: [
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductFormComponent
  ]
})
export class ProductsModule {
  
 }
export interface Product {
  id: number;
  nombre: string;
  precio: number;
  categoria?: string;
  compania_id: number;
}