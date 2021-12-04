import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  catalog__title = 'Каталог Apple Watch';
  search = '';
  products$: Subject<Product[]> = new Subject();

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((products: Product[]) => {
        this.products$.next(products);
    });
    this.activatedRoute.queryParamMap
      .subscribe((params: ParamMap) => {
      const search = params.get('search') || '';
      this.products$.next(this.productService.getActiveProduct(search));
    });
  }
}
