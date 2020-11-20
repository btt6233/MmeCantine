import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API: string = 'http://localhost:8080/lunchtime';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getMenusAvailableToday() {
    return this.http.get(API + '/meal/findallavailablefortoday');
  }

  getMealById(id:number) {
    return this.http.get(API + '/meal/find/' + id);
  }
}
