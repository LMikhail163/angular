import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() active!: boolean;

  products!: Product[];

  constructor(protected productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.productsInCart;
  }
}

