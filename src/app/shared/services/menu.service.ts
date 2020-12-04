import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu.model';

const API: string = 'http://localhost:8080/lunchtime';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {
  }

  findAllAvailableForToday(): Observable<Menu[]> {
    return this.http.get<Menu[]>(API + '/menu/findallavailablefortoday');
  }

  findMenuById(id: number): Observable<Menu> {
    return this.http.get<Menu>(API + '/menu/find/' + id);
  }
}
