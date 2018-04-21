import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  postText:string;
  rows = 3;
  postClicked = false;
  questionClicked = false;
  constructor() { }
  post(){
   this.postClicked = true;
   this.questionClicked = false;
  }
  question(){
    this.questionClicked = true;
    this.postClicked = false;
  }

  ngOnInit() {
  }

}
