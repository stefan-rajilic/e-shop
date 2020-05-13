import { Component } from '@angular/core';
import {Category} from './models/Category.model';
import {HttpClient} from '@angular/common/http';
import {CagegoryService} from './services/cagegory.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EshopApi';

  public categoies: Category[];
  public category: Category;

  constructor(private httpClient: HttpClient, private category2: CagegoryService, private router: Router) {

    this.category2.getCategories().subscribe(
      (data: Category[]) => {
        this.categoies = data;
      }, (error) => {console.log(error); }
    );
  }

  getCategory(id) {
    this.router.navigate(['/category'], {queryParams: {id}});
  }
}
