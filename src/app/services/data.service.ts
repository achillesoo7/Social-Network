import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';


@Injectable() export class DataService {
  data: Observable <Array<any>>;
  public name = new BehaviorSubject<string>('');
  cast = this.name.asObservable();
  users:string[];
  constructor (public http:Http){
  }

  userName(name){
     this.name.next(name);
  }


}
