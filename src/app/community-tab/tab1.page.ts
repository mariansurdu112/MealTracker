import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostAddComponent } from './post-add/post-add.component';

@Component({
  selector: 'app-community-tab',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  /**
   *
   */
  constructor(public modalController: ModalController) {
    
  }


  
  async addPost() {
    const modal = await this.modalController.create({
      component: PostAddComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  displayModal() {
    
  }
}
