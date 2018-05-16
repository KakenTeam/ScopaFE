import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';
import { Order } from './order';
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

}
