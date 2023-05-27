import { Injectable } from '@angular/core';
import {Subject,BehaviorSubject,ReplaySubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public subjectlist = new Subject();
  public behaviorlist = new BehaviorSubject("hellow satya");
  public replaylist = new ReplaySubject();

  constructor() { }

  getproducts(product:any){
    this.subjectlist.next(product);
    this.behaviorlist.next(product);
    this.replaylist.next("hellow satya")
    this.replaylist.next(product);
    
  }
  
}
