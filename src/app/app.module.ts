import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KlavesniceComponent } from './kosik/klavesnice.component';
import { PocitaceComponent } from './produkty/pocitace.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductPageComponent } from './product-page/product-page.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KlavesniceComponent,
    PocitaceComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
