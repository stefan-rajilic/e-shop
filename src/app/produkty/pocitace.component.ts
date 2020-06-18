import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CagegoryService} from '../services/cagegory.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryInfo} from '../models/CategoryInfo.model';
import {Product} from '../models/Product.model';

@Component({
  selector: 'app-pocitace',
  templateUrl: './pocitace.component.html',
  styleUrls: ['./pocitace.component.scss']
})
export class PocitaceComponent implements OnInit {

  public categories: CategoryInfo;
  public products: Product[];
  public product: Product;
  p: number = 1;

  constructor(private hhtpClient: HttpClient, private category2: CagegoryService, private route: ActivatedRoute, private router: Router) { }

  getProduktID(id) {
  this.router.navigate(['/productPage'], {queryParams: {id}});
  }


  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.category2.getCategoryID(params.id)
          .subscribe((category: CategoryInfo) => {
            this.categories = category;
            this.products = category.products;
          });
      });
  }

}
