import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MealAddComponent } from '../meal-add/meal-add.component';

@Component({
  selector: 'app-meal-view',
  templateUrl: './meal-view.component.html',
  styleUrls: ['./meal-view.component.scss']
})
export class MealViewComponent implements OnInit {

  constructor(private modalController:ModalController) { }
  categories=["Breakfast","Lunch","Dinner","Other"];
  closeModal() {
      this.modalController.dismiss();
  }

  ngOnInit() {
  }

  async addMeal(){
    const modal = await this.modalController.create({
      component: MealAddComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
