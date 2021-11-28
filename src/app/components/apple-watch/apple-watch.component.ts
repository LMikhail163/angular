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

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.productList;
  }
}
