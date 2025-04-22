// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent }, // <-- (agregaremos guard más adelante)
  { path: '', redirectTo: 'login', pathMatch: 'full' },  // redirigir ruta vacía a login
  { path: '**', redirectTo: 'login' }  // comodín, redirige cualquier ruta no existente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
