import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-tab',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  /**
   *
   */
  constructor(private router: Router) {
    
    
  }

  logout(){
    this.router.navigate(['authentication']);
  }
}
