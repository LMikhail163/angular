import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

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
  productList!: Product[];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
  }

  onSearch(): void {
    this.products = this.productService.getActiveProduct(this.search);
  }

  ngOnInit(): void {
    this.products = this.productService.productList;
    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      const search = params.get('search') || '';
      this.products = this.productService.getActiveProduct(search);
    });
  }
}
