import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-add',
  templateUrl: './meal-add.component.html',
  styleUrls: ['./meal-add.component.scss']
})
export class MealAddComponent implements OnInit {
categories = ['Breakfast', 'Lunch', 'Dinner', 'Other'];
  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
