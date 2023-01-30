import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartSService } from 'src/app/services/cart-s.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  toggle = false;
  
  cartNumber:number=0;
  wishlistNumber:number=0;



public productList:any=[];
constructor( public api:ApiService, private cartService:CartSService){}

ngOnInit(): void {
    this.api.getproduct().subscribe(res=>{
    this.productList =res;
    this.toggle = this.toggle = res.length;
  })
}

addTocart(item: { color: boolean; }) {
  console.log(item);
 Swal.fire({ text: "Book added to Cart"});
 this.cartNumber++
}



addwishlistcolor(item: { color: boolean; }) {
  item.color = !item.color ;

  if (item.color){
    Swal.fire({ text: "Book Added To Wishlist"});

  }
  if (!item.color){
    Swal.fire({ text: "Book Removed From Wishlist"});
  }

   
  if (item.color){
    this.wishlistNumber++;

  }
  if (!item.color){
    this.wishlistNumber--;
  }
}




 
}