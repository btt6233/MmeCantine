import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/Operators';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu.model';

const API: string = 'http://localhost:8080/lunchtime';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public menus: BehaviorSubject<Menu[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.findAll();
  }

  findAll(): void {
    this.http
      .get<Menu[]>(API + '/menu/findallavailablefortoday')
      .subscribe((menus: Menu[]) => {
        this.menus.next(menus);
      });
  }

  findById(id: number): Observable<Menu> {
    return this.menus.pipe(
      filter((menus: Menu[]) => menus !== null),
      map((menus: Menu[]) => menus.find( menus => menus.id == id))
    );
  }
}
