import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { ApicallService } from '../apicall.service';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {

  constructor(private apicall: ApicallService) {

  }
  bookdata: any;
  book: any = [];
  sum: any;
  n: number = 0;


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

    });
    //this.book.forEach(this.myfunction);

  }


  // for (let book of this.bookdata) {
  //   console.log(book);

  // }

}


