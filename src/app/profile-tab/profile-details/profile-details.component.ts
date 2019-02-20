import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileEditorComponent } from '../profile-editor/profile-editor.component';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }


  async displayEditModal() {
    const modal = await this.modalController.create({
      component: ProfileEditorComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

}
