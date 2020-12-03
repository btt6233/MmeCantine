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
    this.initMenus();
    console.log(this.menus);
    
  }

  initMenus(): void {
    this.http
      .get<Menu[]>(API + '/menu/findallavailablefortoday')
      .subscribe((menus: Menu[]) => {
        this.menus.next(menus);
      });
  }

  getMenu(id: number): Observable<Menu> {
    return this.http.get<Menu>(API + '/menu/find/' + id);
  }
}
