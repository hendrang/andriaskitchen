import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';


import { Product } from "./product.model";


@Injectable()
export class ProductsService implements OnInit {
    productsChanged = new Subject<Product[]>();

    private _productUrl = 'https://andriaskitchen-ak1.firebaseio.com/products.json';
    private products: Product[];

    // private products: Product[] = [
    //     new Product('indonesian', 'Nasi Bogana', '30.000', 'Nasi gurih, telor pindang, dendeng age, ayam kari suwir, sambal goreng ati dan tempe, dan kacang panjang','https://www.dropbox.com/s/oc1ny9i796g0ndx/P10_NasiBogana.jpg?raw=1', true),
    //     new Product('indonesian', 'Nasi Cakalang', '30.000', 'Nasi gurih, ikan cakalang suwir, daun melinjo, bawang merah utuh, cabe rawit, batang sereh','https://www.dropbox.com/s/jc3cg9sebfouzd2/P11_NasiCakalang.jpg?raw=1', true),
    //     new Product('japanese', 'Fried Rice Package', '60.000', 'Fried Rice with grilled salmon and organic vegetables','https://www.dropbox.com/s/9u12ltrhv5vno7q/P4_FriedRicePackage.jpg?raw=1', true),
    //     new Product('japanese', 'Handroll 2', '60.000', '2 hand roll grilled salmon and organic vegetables','https://www.dropbox.com/s/m6mj1v8zuwo8dgo/P2_Handroll2.jpg?raw=1', true)
    // ]

    constructor(private http: HttpClient) { }

    ngOnInit() {
        // this.http.get(this._productUrl)
        //     // .pipe(
        //     //     map(response => {
        //     //         return response;
        //     //     }
        //     // ))
        //     .subscribe(
        //         (products: Product[]) => {
        //             this.setProducts(products);
        //         }
        //     );
    }

    getProducts() {
        return this.http.get<Product[]>(this._productUrl);
        
        // this.http.get<Product[]>(this._productUrl)
        //     .pipe(map(res => {
        //         return res;
        //     }))
        //     .subscribe((products: Product[]) => {
        //         this.setProducts(products);
        //     });

        // return this.products;
        // if (this.products != undefined) {
        //     return this.products.slice();
        // }
    }

    setProducts(products: Product[]) {
        this.products = products;
        this.productsChanged.next(this.products.slice());
    }

    addProduct(product: Product) {
        this.products.push(product);
        this.productsChanged.next(this.products.slice());
    }

    updateProduct(index: number, newRecipe: Product) {
        this.products[index] = newRecipe;
        this.productsChanged.next(this.products.slice());
    }

    deleteProduct(index: number) {
        this.products.splice(index, 1);
        this.productsChanged.next(this.products.slice());
    }
}