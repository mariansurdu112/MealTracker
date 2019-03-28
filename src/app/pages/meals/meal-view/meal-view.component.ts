import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-view',
  templateUrl: './meal-view.component.html',
  styleUrls: ['./meal-view.component.scss']
})
export class MealViewComponent implements OnInit {
  categories = ['Breakfast', 'Lunch', 'Dinner', 'Other'];
  constructor() { }

  ngOnInit() {
  }

}
