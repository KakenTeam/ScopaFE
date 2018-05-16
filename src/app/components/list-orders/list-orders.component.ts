import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Order } from '../order';
import { OrdersService } from './../orders.service';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  orders: Order[] = [];

  constructor(
    private orderService: OrdersService
  ) { 
    this.dtOptions = {
      pagingType: "simple_numbers",
      order: [[3, 'desc']],
      language: {
        url: '../../assets/i18n/datatables/vi.json'
      }
    };
  }

  ngOnInit() {
    this.orderService.getOrders().subscribe(orders => { 
      this.orders = orders;
      this.dtTrigger.next();
    });
  }

}
