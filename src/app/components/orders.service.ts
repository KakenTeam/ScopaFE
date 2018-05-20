import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';
import { Order } from './order';
import { Card } from './card';
@Injectable()
export class OrdersService {

  private base_url = `${environment.base_url}/orders`;

  constructor(
    private http: HttpClient
  ) { }


  getOrders(): Observable<Order[]> {
    return this.http.get(this.base_url)
                    .pipe(
                      map((res: any) => res.orders as Order[]));
  }

  createCard(amount: number): Observable<Card> {
    let url = environment.base_url + '/cards';
    let param = { amount: amount };
    return this.http.post(url, amount)
               .pipe(
                 map((res: any) => res.card as Card)
               );
  }

  getCards(): Observable<Card[]> {
    let url = environment.base_url + '/cards';
    return this.http.get(url) 
               .pipe(
                 map((res: any) => res.cards as Card[])
               );
  }

}
