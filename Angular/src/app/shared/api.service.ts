import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getDrinks() {
    return this.http.get('http://localhost:5000/user/drinks');
  }

  getMachineCoins() {
    return this.http.get('http://localhost:5000/user/machines');
  }
}
