import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ApicallService {

  constructor(private http: HttpClient) { }

  url = "https://bookcart.azurewebsites.net/"
  cartItems = "api/shoppingcart/"
  public getCartItems(userid: number) {

    return this.http.get(this.url + this.cartItems + userid);
  }
}
