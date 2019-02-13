import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet/ngx';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
    
  }

  

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
