import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { map, Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService {
    productsInCart: Product[] = [];
    productList: Product[] = [];

    constructor(private httpClient: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>('/products')
            .pipe(map(response => {
                if(response) {
                    return Object.values(response);
                }
                return [];
            }));
    }

    addProductToCart(product: Product) : void {
        this.productsInCart.push(product);
        console.log(this.httpClient.get<Product[]>('/products'));
    }
    
    deleteProductFromCart(product: Product) : void {
        const findIndex = this.productsInCart.findIndex((data: Product) => data.model === product.model);
        this.productsInCart.splice(findIndex, 1);
    }

    getProduct(model: string): Product | null {
        const product = this.productList.find((item: Product) => {
            return item.model === model;
        });
        if(product) {
            return product;
        } else {
          return product ? product : null;
        }
    }

    getActiveProduct(search: string = ''): Product[] {
        return this.productList.filter((item: Product) => {
            return item.model.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            || item.descr.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        });
    }
}
