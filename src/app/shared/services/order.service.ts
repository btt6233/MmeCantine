import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { UserService } from './user.service';

const API: string = 'http://localhost:8080/lunchtime';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  public findAllOrderByUserId() {
    let user = this.userService.getUser().id;

    return this.http.get(API + '/order/findallforuser/' + user.id);
  }

  public addOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(API + '/order/add', order);
  }
}
