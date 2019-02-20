import { Pipe, Injectable, PipeTransform } from '@angular/core';
import { Product } from '../products/product.model';

@Pipe({
  name: 'categoryFilter'
})

@Injectable()
export class CategoryFilterPipe implements PipeTransform {
    transform(products: Product[], category: string) {
        // if (value == null) {
        //     return null;
        // } else if (category === '') {
        //     return value;
        // }
        //return value.filter(item => item.Category.toLowerCase() === category);

        if(!products)
        {
          return [];
        }
        if(!category) {
          return products;
        }

        return products.filter(product => product.category.toLowerCase() == category);
    }
}