import { Component, Input, OnInit } from '@angular/core';
import { Cat } from 'src/app/shared/cat.model';
@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
})
export class CatComponent implements OnInit {
  @Input() cat: Cat;
  constructor() {}

  ngOnInit(): void {}
}
