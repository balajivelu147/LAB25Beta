import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { ApicallService } from '../apicall.service';
import { map, catchError } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {

  constructor(private apicall: ApicallService, private router: Router) {

  }
  bookdata: any;
  book: any = [];
  sum: any;
  carttotal: number = 0;
  postdata: any;
  bookdetailsurl = "https://bookcart.azurewebsites.net/books/details/"
  date = new Date()

  n: number = 0;
  formgroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    state: new FormControl('', [Validators.required])

  });


  ngOnInit() {

    this.apicall.getCartItems(1965).subscribe(response => {
      this.bookdata = response;

      this.book = Object.entries(this.bookdata);
      this.sum = 0;
      console.log(this.book);

      this.n = this.book.length;
      for (let i = 0; i < this.n; i++) {

        this.sum += (this.book[i][1].book.price * this.book[i][1].quantity);
      }

      console.log(this.sum);
      this.carttotal = this.sum;
      this.postdata = {
        "orderId": "669-591007",
        "orderDetails": this.bookdata,
        "cartTotal": this.carttotal,
        "orderDate": this.date


      }

    });



  }

  onSubmit() {
    console.log(this.formgroup.value);
    this.apicall.postCartItems(this.postdata);
    this.router.navigate(['/orderdetails']);


  }


}



