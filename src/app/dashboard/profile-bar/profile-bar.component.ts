import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-bar',
  templateUrl: './profile-bar.component.html',
  styleUrls: ['./profile-bar.component.css']
})
export class ProfileBarComponent implements OnInit {
  name:string = "Sumit jha";
  discription:string = "Enterprenuer || Programmer || JavaScript lover";
  constructor() { }

  ngOnInit() {
  }

}
