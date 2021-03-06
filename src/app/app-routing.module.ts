import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from 'src/app/components/product-details/product-details.component';


const routes: Routes = [
  {path: 'shop', component: MainComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:model', component: ProductDetailsComponent},
  {path: '', redirectTo: 'shop', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
