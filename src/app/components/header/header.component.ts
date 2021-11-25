import { Component} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(protected productService: ProductService) {
  }

  showCart():void{
    this.productService.showCart();
    document.body.style.overflow = 'hidden';
  }
}
