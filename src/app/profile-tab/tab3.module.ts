import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ProfileSliderComponent } from './profile-slider/profile-slider.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { PostProfileComponent } from './post-profile/post-profile.component';
import { PostProfileListComponent } from './post-profile-list/post-profile-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  entryComponents: [ProfileEditorComponent],
  declarations: [Tab3Page, ProfileSliderComponent, ProfileEditorComponent, ProfileDetailsComponent, PostProfileComponent, PostProfileListComponent]
})
export class Tab3PageModule {}
