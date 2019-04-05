import { Camera } from '@ionic-native/camera/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { ActionSheet } from '@ionic-native/action-sheet/ngx';
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
import { CategoryMealAddComponent } from './category-meal-add/category-meal-add.component';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

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
  declarations: [MealsComponent, MealComponent, MealAddComponent, MealViewComponent, CategoryMealComponent, CategoryMealAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [ActionSheet, PhotoLibrary, Camera, ImagePicker]
})
export class MealsModule { }
