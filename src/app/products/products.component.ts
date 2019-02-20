import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Product } from './product.model';
import { Subscription, Observable } from 'rxjs';
import { ProductsService } from './products.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  products: Product[];
  productsChangedSubscription: Subscription;
  productsSubscription: Subscription;
  modalCloseResult: string;
  categoryFilter: string;

  constructor(private productsService: ProductsService, private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.productsChangedSubscription = this.productsService.productsChanged.subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );

    this.productsSubscription = this.productsService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  categorize(categoryFilter: string) {
    this.categoryFilter = categoryFilter;
  }

  onModalClose(reason: string) {
    this.modalCloseResult = reason;
  }

  ngOnDestroy() {
    this.productsChangedSubscription.unsubscribe();
    this.productsSubscription.unsubscribe();
  }

}
