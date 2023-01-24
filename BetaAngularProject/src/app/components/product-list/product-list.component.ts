import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {



public totalItem:any=0; 
public booklist:any=[];
constructor( private api:ApiService){}

ngOnInit(): void {
  this.api.getproduct().subscribe(res=>{
    this.booklist =res;
  })
}
addTocart(item:any){
  console.log(item)
}

}
