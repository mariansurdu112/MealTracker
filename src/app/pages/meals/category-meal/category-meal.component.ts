import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-meal',
  templateUrl: './category-meal.component.html',
  styleUrls: ['./category-meal.component.scss']
})
export class CategoryMealComponent implements OnInit {
  @Input() category: string;
  constructor() { }

  ngOnInit() {
  }

}
