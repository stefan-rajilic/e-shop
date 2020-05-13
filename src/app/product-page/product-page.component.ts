import { Component, OnInit } from '@angular/core';
import {Product} from '../models/Product.model';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/Category.model';
import {CagegoryService} from '../services/cagegory.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  public product: Product;

  constructor(private httpClient: HttpClient, private categorySer: CagegoryService, private route: ActivatedRoute) { }




  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.categorySer.getProduct(params.id)
          .subscribe((products: Product) => {
            this.product = products;
          });
      });
  }

}
