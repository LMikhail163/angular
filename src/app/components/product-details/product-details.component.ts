import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product | null;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    const model = this.activatedRoute.snapshot.params['model'];
    if(model) {
      this.product = this.productService.getProduct(model);
    }
  }

}
