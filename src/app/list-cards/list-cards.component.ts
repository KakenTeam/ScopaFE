import { OrdersService } from './../components/orders.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Card } from '../components/card';
import { BsModalComponent } from 'ng2-bs3-modal';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {

  @ViewChild("modal") modal: BsModalComponent;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  amount: number = 0;

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
