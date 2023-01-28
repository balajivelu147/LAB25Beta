import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ApicallService {

  headers = new HttpHeaders({

    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVc2VybmFtZTEiLCJ1c2VyaWQiOiIxOTY1IiwidXNlclR5cGVJZCI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIyIiwianRpIjoiZjQxNzc5MmYtY2VmNS00NDUyLWE1YmUtODcyMjU4MmMwN2Y4IiwiZXhwIjoxNjc0NzE1NjEzLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8ifQ.9BJfE9984UE52eJ2immdwEVWM8EO8FH_LlQaWNeAf6o"
  });
  options = { headers: this.headers };

  constructor(private http: HttpClient) { }

  url = "https://bookcart.azurewebsites.net/"
  cartItems = "api/shoppingcart/"
  post_url = "https://bookcart.azurewebsites.net/api/CheckOut/1965";

  public getCartItems(userid: number) {

    return this.http.get(this.url + this.cartItems + userid);
  }

  public postCartItems(postdata: { orderDetails: any; cartTotal: number; }) {
    console.log("post api call");
    console.log(postdata);
    this.http.post(this.post_url, postdata, this.options).subscribe(res => console.log(res),
      err => console.log(err));
  }
}
