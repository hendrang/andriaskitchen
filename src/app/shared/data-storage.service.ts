import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ProductsService } from '../products/products.service';
import { Product } from '../products/product.model';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private productsService: ProductsService) { }

    storeProducts() {
        //const token = this.authService.getToken();
        //return this.http.put('https://mediachandra-mc1.firebaseio.com/products.json?auth=' + token, this.productsService.getProducts());
    }

    getProducts() {

        //const token = this.authService.getToken();
        // return this.productsService.getProducts();

        return this.http.get('https://andriaskitchen-ak1.firebaseio.com/products.json')
            .pipe(map(
                response => {
                    return response;
                }
            ))
            .subscribe(
                (products: Product[]) => {
                    this.productsService.setProducts(products);
                }
            );

        // return this.http.get('https://andriaskitchen-ak1.firebaseio.com/products.json')
        // .pipe(map(
        //     (response: Response) => {
        //         const products: Product[] = response.json();
        //         return products;
        //     }
        // ))
        // .subscribe(
        //     (products: Product[]) => {
        //         this.productsService.setProducts(products);
        //     }
        // );
    }

}