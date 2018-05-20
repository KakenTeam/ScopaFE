import { OrdersService } from './../components/orders.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Card } from '../components/card';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  cards: Card[] = [];

  constructor(
    private orderService: OrdersService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: "simple_numbers",
      order: [],
      language: {
        url: '../../assets/i18n/datatables/vi.json'
      }
    };

    this.orderService.getCards()
        .subscribe(cards => {
          this.cards = cards;
          this.dtTrigger.next();
        })

  }

}
