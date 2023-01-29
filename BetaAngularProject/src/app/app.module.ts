import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { HomeComponent } from './components/home/home.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    BookDetailsComponent,
    CartComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }


