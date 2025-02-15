import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderListService } from '../order-list/order-list.service';
import { Order } from '../shared/models/data-model';
import { OrderPickerService } from './order-picker.service';

@Component({
  selector: 'app-order-picker',
  templateUrl: './order-picker.component.html',
  styleUrls: ['./order-picker.component.scss']
})
export class OrderPickerComponent implements OnInit {
  private order:Order;
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private orderListService:OrderListService,
    private orderPickerService:OrderPickerService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getOrder();
  }

  private getOrder() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.orderListService.getOrder(id).subscribe(order => {
      this.order = order;
    })
  }

  private getSubtotal() {
    let subtotal = 0;

    for(let item of this.order.menuItems) {
      subtotal += item.price * item.quantity;
    }

    return subtotal;
  }

  private getGST() {
    return .10 * this.getSubtotal();
  }

  private getPST() {
    return .10 * this.getSubtotal();
  }


  private getTotal() {
    return (this.getSubtotal() + this.getGST() + this.getPST() + this.getDeliveryCharge());
  }

   private getDeliveryCharge() {
    if(this.order.delivery.method == 'PickUp') {
      this.order.delivery_charge = 0;
    } else {
      this.order.delivery_charge =  this.getSubtotal() * .10
    }

    return this.order.delivery_charge;
  }

  private setOrderStatus() {
    console.log('completed order', this.order);
    this.orderPickerService.setOrderStatus(this.order._id, this.order.status).subscribe(() => {
      this.router.navigate(['/order-list'])
    });    
  }

}
