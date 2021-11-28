import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-apple-watch',
  templateUrl: './apple-watch.component.html',
  styleUrls: ['./apple-watch.component.css']
})
export class AppleWatchComponent implements OnInit {
  catalog__title = 'Каталог Apple Watch';
  products!: Product[];
  buttonText = 'Купить';
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
    this.products = this.productService.productList;
    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
    const search = params.get('search') || '';
    this.products = this.productService.getActiveProduct(search);
    });
  }
}
