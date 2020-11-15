import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API: string = 'http://localhost:8080/lunchtime';

@Injectable({
  providedIn: 'root',
})
export class MenusService {
  constructor(private http: HttpClient) {}

  getMenuAvailableToday() {
    return this.http.get(API + '/meal/findallavailablefortoday');
  }
}
