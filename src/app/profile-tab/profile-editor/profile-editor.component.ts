import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  constructor(private modalController:ModalController) { }

  closeModal() {
    this.modalController.dismiss();
  }
  ngOnInit() {
  }

}
