import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentDate:any;
  time:any;
  constructor() {
  this.currentDate = new Date().getFullYear().toString();
  this.time = new Date().getDay();
  switch (this.time){
    case(1):
    this.time = "Monday";
    break;
    case(2):
    this.time = "Tuesday";
    break;
    case(3):
    this.time = "Wednesday";
    break;
    case(4):
    this.time = "Thursday";
    break;
    case(5):
    this.time = "Friday";
    break;
    case(6):
    this.time = "Saturday";
    break;
    case(7):
    this.time = "Sunday";
    break;

  }
   }

  ngOnInit() {
  }

}
