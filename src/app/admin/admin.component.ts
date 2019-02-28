import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from '../products/product.model';
import { ProductsService } from '../products/products.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  products: Product[];
  productsSubscription: Subscription;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    

    this.productsSubscription = this.productsService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    this.productsService.updateProducts(this.products);

    this.onCancel();
  }

}
