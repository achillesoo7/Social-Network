import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name:string;
  islogin = false;
  constructor(public dataService:DataService) {
     this.dataService.cast.subscribe(data => {
       this.name = data;
       if(this.name.length != 0){
         this.islogin = true;
       }
     });
   }
   logOut(){
     document.location.reload();
   }
  ngOnInit() {
  }

}
