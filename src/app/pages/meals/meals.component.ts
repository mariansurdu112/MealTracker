import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { MealAddComponent } from './meal-add/meal-add.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

   addMeal() {
    this.router.navigate(['meals/add']);
  }
  

}
