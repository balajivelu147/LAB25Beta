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
  
public c =0;
public w =0;



public productList:any=[];
constructor( public api:ApiService, private cartService:CartSService){}

ngOnInit(): void {
    this.api.getproduct().subscribe(res=>{
    this.productList =res;
    // this.totalcount = res.length;
    this.toggle = this.toggle = res.length;
    // this.productList=this.api.getproduct()
  })
}
// addTocart(item){
//   // console.log(item);
//   this.cartService.addtoCart(item);
//   this.cartService.removeCartItem(item);
//   return this.totalcount;
// }

addTocart(item: { color: boolean; }) {
 this.c++;
  console.log(item);
 Swal.fire({ text: "Book added to Cart"});
}


addTowishlist(item:any) {

 
  // if(item ==1){
  //  this.w++;
  // }
  // else{
  //   this.w--;
  // }
    
  // Swal.fire({ 
  //   text: "Book added to wishlist"});

    
}
// enableDisableRule(_item:number){
//   this.toggle = !this.toggle; 
// }

addwishlistcolor(item: { color: boolean; }) {
  item.color = !item.color ;
  console.log(item)
}
status = false;

  callme(){
    
    this.status = !this.status;

    if(this.status){
      Swal.fire({ text: "Book Added To Wishlist"});
    }
    if(!this.status){
      Swal.fire({ text: "Book Removed From Wishlist"});
    }
  }

}