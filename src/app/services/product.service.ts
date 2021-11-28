import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService {
    constructor(private httpClient: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>('/products');
    }

    productsInCart: Product[] = [];
    productList: Product[] = [];

    public addProductToCart(product: Product) : void {
        this.productsInCart.push(product);
    }
    public deleteProductFromCart(product: Product) : void {
        let findIndex = this.productsInCart.findIndex((data: Product) => data.model === product.model);
        this.productsInCart.splice(findIndex, 1);
    }

    isShowCart: boolean = false;

    public showCart(){
      this.isShowCart = true;
    }
  
    public closeCart(){
      this.isShowCart = false;
    }

    getProduct(model: string): Product | null {
        const product = this.productList.find((item: Product) => {
            return item.model === model;
        });
        if(product) {
            return product;
        } else {
            const productInCart = this.productsInCart.find((item: Product) => {
                return item.model === model;
            });
          return productInCart ? productInCart : null;
        }
    }

    getActiveProduct(search: string = ''): Product[] {
        return this.productList.filter((item: Product) => {
            return item.model.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            || item.descr.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        });
    }
}
