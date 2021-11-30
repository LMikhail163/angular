import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search = '';

  products!: Product[];

  constructor(protected productService: ProductService,
              private router: Router) {}

  onSearch(): void {
    this.router.navigate(['shop'], {
      queryParams: {
        search: this.search
      }
    });
  }


  ngOnInit(): void {

  }
}
