import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {KlavesniceComponent} from './kosik/klavesnice.component';
import {PocitaceComponent} from './produkty/pocitace.component';
import {ProductPageComponent} from './product-page/product-page.component';


const routes: Routes = [
  {path: `home`, component: HomeComponent},
  {path: `kosik`, component: KlavesniceComponent},
  {path: `produkty`, component: PocitaceComponent},
  {path: ``, redirectTo: `/home`, pathMatch: `full`},
  {path: `productPage`, component: ProductPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
