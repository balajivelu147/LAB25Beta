import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  {path:"product-list" , component:ProductListComponent},
  {path:"book-details",component:BookDetailsComponent},
  { path:"cart",component:CartComponent},
  { path:"wishlist" , component:WishlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

