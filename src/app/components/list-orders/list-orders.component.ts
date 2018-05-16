import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  constructor(
    private orderService: OrdersService
  ) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => console.log(orders));
  }

}
