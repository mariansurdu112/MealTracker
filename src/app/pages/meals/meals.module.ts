import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './meals.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MealComponent } from './meal/meal.component';
import { MealAddComponent } from './meal-add/meal-add.component';
import { MealViewComponent } from './meal-view/meal-view.component';
import { CategoryMealComponent } from './category-meal/category-meal.component';

const routes: Routes = [
  {
    path: '',
    component: MealsComponent
  },
  {
    path: 'details',
    component: MealViewComponent
  },
  {
    path: 'add',
    component: MealAddComponent
  }
];

@NgModule({
  declarations: [MealsComponent, MealComponent, MealAddComponent, MealViewComponent, CategoryMealComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class MealsModule { }
