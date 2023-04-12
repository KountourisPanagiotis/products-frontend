import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsService } from './products.service';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsInsertComponent } from './products-insert/products-insert.component';

const routes: Routes = [
  { path: 'list', component: ProductsListComponent },
  { path: 'insert', component: ProductsInsertComponent },
];

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsInsertComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProductsService],
})
export class ProductsModule { }
