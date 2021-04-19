import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cat } from '../shared/cat.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {
  cats: Cat[] = [
    // new Hero('Mruczek', 'British', '../../../assets/cat.jpg'),
    // new Hero('BardzoDluganazwa', 'British', '../../../assets/cat2.jpg'),
    // new Hero('Mruczek', 'British', '../../../assets/cat3.jpg'),
  ];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://angular-recruitment-default-rtdb.firebaseio.com/cats.json')
      .pipe(
        map((responseData) => {
          const catsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              catsArray.push({ ...responseData[key], id: key });
            }
          }
          return catsArray;
        })
      )
      .subscribe((response) => {
        this.cats = response;
      });
  }
}
