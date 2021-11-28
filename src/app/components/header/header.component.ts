import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products!: Product[];
  search = '';


  constructor(protected productService: ProductService,
              private activatedRoute: ActivatedRoute) {
  }

  showCart():void{
    this.productService.showCart();
    document.body.style.overflow = 'hidden';
  }

  onSearch(): void {
    this.products = this.productService.getActiveProduct(this.search);
  }


  ngOnInit(): void {
    // this.products = this.productService.productList;
    // this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
    // const search = params.get('search') || '';
    // this.products = this.productService.getActiveProduct(search);
    // });
  }
}
