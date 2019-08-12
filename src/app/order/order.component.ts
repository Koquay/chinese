import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Order } from '../shared/models/data-model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  private order: Order;
  private deleteItem;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getOrder();
  }

  private getOrder() {
    this.orderService.getOrder().subscribe(order => {
      this.order = order;
    })
  }

  private increaseQuantity(item) {
    item.quantity += 1;
    this.getOrder();
  }

  private decreaseQuantity(item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.getOrder();
    }
  }

  public removeItem(itemToRemove) {
    let index = this.order.menuItems.findIndex(item => item._id == itemToRemove._id);

    if (index >= 0) {
      this.order.menuItems.splice(index, 1);
      this.getOrder();
    }
  }

  private setDeleteItem(item) {
    this.deleteItem = item;    
  }

}
