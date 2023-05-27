import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  simpleproduct:any;
  behaviorProducts:any;
  replayproducta:any;
  constructor(private service:ServiceService){}

ngOnInit(): void {
  this.service.subjectlist.subscribe((data)=>{      //calling data from simple subject
    this.simpleproduct=data;
  })

  this.service.behaviorlist.subscribe((data)=>{
    this.behaviorProducts=data;
  })

  this.service.replaylist.subscribe((data)=>{
    this.replayproducta=data;
    console.log(data)
  })
}
}
