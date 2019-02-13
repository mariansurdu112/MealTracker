import { Component, OnInit } from '@angular/core';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.scss']
})
export class PhotoUploaderComponent implements OnInit {
  buttonLabels = ['Camera', 'Photo library'];
  options: ActionSheetOptions = {
   title: 'Upload photo',
   subtitle: 'Choose an action',
   buttonLabels: this.buttonLabels,
   addCancelButtonWithLabel: 'Cancel',
   destructiveButtonLast: true
 }
  constructor(private actionSheet: ActionSheet,private platform: Platform) { }

  ngOnInit() {
  }

  chooseOptionUpload() {
    console.log("Show action Sheet")
    this.platform.ready().then(()=>{
      this.actionSheet.show(this.options).then((buttonIndex: number) => {
        console.log('Button pressed: ' + buttonIndex);
      });
    })
  }

}
