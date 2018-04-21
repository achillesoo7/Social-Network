import { Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';

declare var jQuery: any;

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})
export class RightbarComponent implements OnInit {
  data:any[] = [];
  demo = true;
  constructor(public dataService:DataService) {
}
  ngOnInit() {
  }

}
