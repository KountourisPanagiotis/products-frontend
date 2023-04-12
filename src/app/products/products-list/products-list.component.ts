import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product ,ProductsAPIList } from '../products.interfaces';
import { Subscription } from 'rxjs';
import { orderBy } from 'lodash-es';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy{
  constructor(private productsService: ProductsService) {}

  loading = false;
  productsList: Product[] = [];
  subscription: Subscription | undefined;

  productsSortType: 'asc' | 'desc' = 'asc';
  costSortType: 'asc' | 'desc' = 'asc';
  quantitySortType: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
    console.log('Starting "findall" API call');
    this.loading = true;
    this.subscription = this.productsService.findAll().subscribe({
      next: (apiData: ProductsAPIList) => {
        const { status, data } = apiData;
        this.productsList = data;
        console.log(status, data);
      },
      error: (error) => {
        this.loading = false;
        console.log(error);
      },
      complete: () => {
        this.loading = false;
        console.log('API call completed');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleSort(key: string) {
    switch (key) {
      case 'product':
        this.productsSortType =
          this.productsSortType === 'asc' ? 'desc' : 'asc';
        this.productsList = orderBy(this.productsList, [key], [this.productsSortType]);
        break;
      case 'cost':
        this.costSortType =
          this.costSortType === 'asc' ? 'desc' : 'asc';
        this.productsList = orderBy(this.productsList, [key], [this.costSortType]);
        break;
      case 'quantity':
        this.quantitySortType =
          this.quantitySortType === 'asc' ? 'desc' : 'asc';
        this.productsList = orderBy(this.productsList, [key], [this.quantitySortType]);
        break;
      default:
        break;
    }
  }
}
