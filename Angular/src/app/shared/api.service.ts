import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Machine {
  id: number;
  coins: number;
  number: string;
  oneCoin: boolean;
  twoCoin: boolean;
  fiveCoin: boolean;
  tenCoin: boolean;
}

export interface Drink {
  id: number;
  name: string;
  cost: number;
  amount: number;
  image: any;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  getDrinks() {
    return this.http.get('http://localhost:5000/shared/drinks');
  }

  getMachineCoins() {
    return this.http.get('http://localhost:5000/shared/machines');
  }

  putDrink(drink: Drink) {
    const httpOptions = {
      headers: new HttpHeaders({'ContentType': 'application/json'})
    }
    return this.http.put('http://localhost:5000/admin/drinks', drink, httpOptions);
  }
}
