import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  themeCover = 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2016/howcuttingdo.jpg';
  constructor(public router:Router) { }

  ngOnInit() {
  }

  goToDetails() {
    this.router.navigate(['meals/details']);
  }

}
