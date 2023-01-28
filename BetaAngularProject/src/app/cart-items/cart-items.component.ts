import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }
  checkoutPage(pathstring: string) {
    this.router.navigate(['/checkout']);
  }
}
