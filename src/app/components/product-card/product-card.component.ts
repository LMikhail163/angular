import { Component, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';

 
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent  {
  @Input() product!: Product;
  @Input() isInCart!: boolean;
  @Input() isInCartCross!: boolean;

  buttonText = 'Купить';
  
  constructor(protected productService: ProductService) {
  }

  buy(): void {
    this.productService.addProductToCart(this.product);
    this.buttonText = 'В корзине';
  }

  deleteProduct(): void {
    this.productService.deleteProductFromCart(this.product);
  }
}
