import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

declare var jQuery: any;

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})

export class LeftbarComponent implements OnInit {
  users = [];
  constructor(public dataService:DataService) {

   }

  ngOnInit() {
  }

}
