import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Menu } from '../models/menu.model';

const API: string = 'http://localhost:8080/lunchtime';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private http: HttpClient;

  constructor(private authHttp: HttpClient, handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  public findAllAvailableForToday(): Observable<Menu[]> {
    return this.http.get<Menu[]>(API + '/menu/findallavailablefortoday');
  }

  public findMenuById(id: number): Observable<Menu> {
    return this.http.get<Menu>(API + '/menu/find/' + id);
  }

  public addMenu(menu: Menu): Observable<Menu> {
    return this.authHttp.put<Menu>(API + '/menu/add/' + menu, {
      observe: 'response',
    });
  }
}
