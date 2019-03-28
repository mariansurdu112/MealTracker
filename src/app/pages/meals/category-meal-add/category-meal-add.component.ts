import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-meal-add',
  templateUrl: './category-meal-add.component.html',
  styleUrls: ['./category-meal-add.component.scss']
})
export class CategoryMealAddComponent implements OnInit {
  @Input() category: string;
  constructor() { }

  ngOnInit() {
  }

}
