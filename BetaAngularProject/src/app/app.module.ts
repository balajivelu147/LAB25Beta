import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { MenubarComponent } from './menubar/menubar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {

  MatFormFieldModule
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CartItemsComponent,
    MenubarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    // MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule
    // MatInputModule,
    // MatRippleModule,
  ],
  exports: [
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
