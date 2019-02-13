import { Component, OnInit } from '@angular/core';
import { MealViewComponent } from '../meal-view/meal-view.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss']
})
export class MealCardComponent implements OnInit {

  constructor(private modalController:ModalController) { }

  async displayInfo() {
    const modal = await this.modalController.create({
      component: MealViewComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
