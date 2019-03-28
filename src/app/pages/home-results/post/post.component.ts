import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  constructor() { }

  ngOnInit() {
  }

}
