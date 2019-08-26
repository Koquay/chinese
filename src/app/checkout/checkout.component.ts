import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OrderService } from '../order/order.service';
import { Order, MenuItem } from '../shared/models/data-model';
import { MessageService } from '../shared/message/message/message.service';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, AfterViewInit {
  private order: Order;
  private deleteItem:MenuItem;
  private paymentMethod = "Credit";

  private elements: Elements;
  private card: StripeElement;

  private elementsOptions: ElementsOptions = {
    locale: 'en'
  };

  constructor(
    private orderService: OrderService,
    private messageService:MessageService,
    private stripeService: StripeService,
  ) { }

  ngOnInit() {
    this.getOrder();
  }

  ngAfterViewInit() {
    this.initCreditCard();
  }

  private placeOrder() {
    console.log('placing order', this.order)
    this.order.payment_method = this.paymentMethod;

    if(this.paymentMethod == 'Credit') {
      this.stripeService.createToken(this.card, { name }).subscribe(result => {
        console.log('result', result);
        if (result.token) {
          this.order.card_token = result.token.id
          console.log('order', this.order)
          this.orderService.placeOrder(this.order).subscribe(order => {
            this.messageService.sendSuccess("Your order was successfully placed. It will be ready in about 15 minutes.")
          })
        } else if (result.error) {
          console.log('result.error', result.error.message);
          this.messageService.sendInfo("There is a problem charging your credit card. Please enter correct information");
          return;        
        }
      });
    } else {
      this.orderService.placeOrder(this.order).subscribe(order => {
        this.messageService.sendSuccess("Your order was successfully placed. It will be ready in about 15 minutes.")
      });
    }    
  }

  private initCreditCard() {
    this.stripeService.elements(this.elementsOptions).subscribe(elements => {
      this.elements = elements;

      if (!this.card) {
        this.card = this.elements.create('card', {
          style: {
            base: {
              iconColor: '#666EE8',
              color: '#31325F',
              // lineHeight: '40px',
              fontWeight: 300,
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSize: '18px',
              '::placeholder': {
                color: '#aab7c4',
              }
            }
          }
        });
        this.card.mount('#card-element');
      }
    });
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

  private showPaymentMethod() {
    console.log('paymentMethod', this.paymentMethod)
  }

  private setDeliveryCharge() {
    this.getOrder(); 
  }

}
