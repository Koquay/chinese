import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Order, Menu, MenuItem } from '../shared/models/data-model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order:Order = null;
  
  constructor() { }

  public addToOrder(item:Menu) {
   if(this.order == null) {
      this.order = new Order();      
    }

    let menuItem = new MenuItem();

    menuItem.name = item.name;
    menuItem.price = item.price;
    menuItem.quantity = item.quantity;
    menuItem.type = item.type;
    menuItem._id = item._id;

    console.log('menu item', menuItem);
    
    this.order.menuItems.push(menuItem);

    return of()
  }

  public getOrder() {
    this.order.subtotal = this.getSubtotal();
    this.order.discount = this.getDiscount();
    this.order.tax = this.getTax();
    this.order.total = this.getTotal();    
    return of(this.order);
  }

  public getTax() {
    return this.getSubtotal() * .10;
  }

  public getDiscount() {
    return this.getSubtotal() * .10;
  }

  public getTotal() {
    return this.getSubtotal() + this.getTax() - this.getDiscount();
  }

  public getSubtotal() {
    let subtotal = 0;

    for(let item of this.order.menuItems) {
      subtotal += item.price * item.quantity;
    }

    return subtotal;
  }
}


