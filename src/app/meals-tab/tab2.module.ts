import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { MealCardComponent } from './meal-card/meal-card.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealPhotoPickerComponent } from './meal-photo-picker/meal-photo-picker.component';
import { MealAddComponent } from './meal-add/meal-add.component';
import { MealViewComponent } from './meal-view/meal-view.component';
import { CategoryMealComponent } from './category-meal/category-meal.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page, MealCardComponent, MealListComponent, 
    MealPhotoPickerComponent, MealAddComponent, MealViewComponent, 
    CategoryMealComponent, MealDetailsComponent],
    entryComponents: [MealViewComponent,MealAddComponent]

})
export class Tab2PageModule {}
