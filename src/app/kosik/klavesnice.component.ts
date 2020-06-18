import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CagegoryService} from '../services/cagegory.service';
import {Product} from '../models/Product.model';

@Component({
  selector: 'app-klavesnice',
  templateUrl: './klavesnice.component.html',
  styleUrls: ['./klavesnice.component.scss']
})
export class KlavesniceComponent implements OnInit {

  public prodArr = [];
  public price: number;

  constructor(private activatedRoute: ActivatedRoute, private products: CagegoryService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(i => {
      this.products.getProduct(i.id).subscribe((data: Product) => {
        this.prodArr.push(data);
        console.log(this.prodArr);
        localStorage.setItem('product', JSON.stringify(this.prodArr));
        const jsonProduct = localStorage.getItem('product');
        this.prodArr = JSON.parse(jsonProduct);
      });
    });
    const jsonProduct2 = localStorage.getItem('product');
    this.prodArr = JSON.parse(jsonProduct2);
    const result = this.prodArr.map(res => res.price).reduce((a, b) => a + b, 0);
    this.price = result;
  }
}


