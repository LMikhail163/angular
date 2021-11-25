import { Injectable, InjectFlags } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService {
    productsInCart: Product[] = [];
    productList: Product[] = [
        {
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch1',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 10000
        },

        {
            img: 'https://wmpics.pics/dm-857S.png',
            model: 'Apple Watch2',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 11000
        },

        {
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch3',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 12000
        },

        {
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch4',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 11000
        },    
        
        {
            img: 'https://wmpics.pics/dm-857S.png',
            model: 'Apple Watch5',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 14000
        },
        
        { 
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch6',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 13000
        },
        
        {
            img: 'https://wmpics.pics/dm-857S.png',
            model: 'Apple Watch7',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 12000
        },
        
        {
            img: 'https://wmpics.pics/dm-AFAR.png',
            model: 'Apple Watch8',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 10000
        },    
        
        {
            img: 'https://wmpics.pics/dm-857S.png',
            model: 'Apple Watch9',
            descr: 'Для первых шагов в тренировках, основанных на сердечном ритме',
            link: 'Подробнее',
            price: 11000
        },
    ];
    product: any;

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
        return this.product.filter((item: Product) => {
            return item.model.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            || item.descr.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        });
    }
}
