import { Component, OnInit, Input } from '@angular/core';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Platform } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
@Component({
  selector: 'app-category-meal-add',
  templateUrl: './category-meal-add.component.html',
  styleUrls: ['./category-meal-add.component.scss']
})
export class CategoryMealAddComponent implements OnInit {
  @Input() category: string;
  imageCamera: string;
  constructor(private actionSheet: ActionSheet, private camera: Camera, 
    private imagePicker: ImagePicker, private platform: Platform) { }
  buttonLabels = ['Take a photo', 'Choose from your library'];
  optionsActionsSheet: ActionSheetOptions = {
    title: 'From where do you want to import picture?',
    subtitle: 'Choose an action',
    buttonLabels: this.buttonLabels,
    addCancelButtonWithLabel: 'Cancel',
    destructiveButtonLast: true
  }
  optionsCamera: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  optionsImagePicker = {
    maximumImagesCount: 2,
    width: 600,
    height: 600,
    quality: 100,
    outputType: 1
  };
  ngOnInit() {}
    
    choosePhoto(){
      this.actionSheet.show(this.optionsActionsSheet).then((buttonIndex: number) => {
        if (buttonIndex === 1) {
          this.choosePhotoFromCamera();
        }
        if (buttonIndex === 2) {
          this.choosePhotoFromPhotoLibrary();
        }
      });
    }

    choosePhotoFromCamera() {
      this.camera.getPicture(this.optionsCamera).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.imageCamera = 'data:image/jpeg;base64,' + imageData;
        this.uploadPhotoToServer();
        console.log(this.imageCamera);
      }, (err) => {
        // Handle error
      });
    }

    uploadPhotoToServer() {
      console.log('Upload photo to server');
    }

    choosePhotoFromPhotoLibrary() {
      this.platform.ready().then(() => {
        this.imagePicker.getPictures(this.optionsImagePicker).then((results) => {
          for (let i = 0; i < results.length; i++) {
            this.imageCamera = 'data:image/jpeg;base64,' + results[i];
            console.log('Image URI: ' + this.imageCamera);
            this.uploadPhotoToServer();
          }
        }, (err) => {
          alert(JSON.stringify(err));
        });
      });
    }
  }



