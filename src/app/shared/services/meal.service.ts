import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../models/meal.model';

const API: string = 'http://localhost:8080/lunchtime';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient, private handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  findAllAvailableForToday(): Observable<Meal[]> {
    return this.http.get<Meal[]>(API + '/meal/findallavailablefortoday');
  }
}

