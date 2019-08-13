import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order/order.service';
import { Order, MenuItem } from '../shared/models/data-model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  private order: Order;
  private deleteItem:MenuItem;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getOrder();
  }

  private getOrder() {
    this.orderService.getOrder().subscribe(order => {
      this.order = order;
      console.log('order', order)
    })
  }

  private increaseQuantity(item) {
    this.orderService.increaseQuantity(item).subscribe(order => {
      this.order = order;
    })
  }

  private decreaseQuantity(item) {
    if (item.quantity > 1) {
      this.orderService.decreaseQuantity(item).subscribe(order => {
        this.order = order;
      })
    }
  }

  private removeItem(itemToRemove) {
    this.orderService.removeItem(itemToRemove).subscribe(order => {
      this.order = order;
    })
  }

  private setDeleteItem(item) {
    this.deleteItem = item;
  }

  private showDelivery() {
    console.log('delivery', this.order.delivery)
  }

  private placeOrder() {
    console.log('placing order', this.order)

    // this.orderService.placeOrder(this.order).subscribe(() => {
    //   this.orderPlaced = true;
    // });
  }

}
