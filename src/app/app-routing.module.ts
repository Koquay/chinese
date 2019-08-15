import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {breadcrumb: 'Home'}
  },
  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule',
    data: {breadcrumb: 'Order'}
  },
  {
    path: 'checkout',
    loadChildren: './checkout/checkout.module#CheckoutModule',
    data: {breadcrumb: 'Checkout'}
  },
  {
    path: 'order-list',
    loadChildren: './order-list/order-list.module#OrderListModule',
    data: {breadcrumb: 'Pending Order'}
  },
  {
    path: 'order-picker',
    loadChildren: './order-picker/order-picker.module#OrderPickerModule',
    data: {breadcrumb: 'Order Picker'}
  },
  {
    path: '', pathMatch: 'prefix', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
