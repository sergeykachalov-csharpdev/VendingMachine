import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../shared/api.service';

interface Machine {
  id: number;
  coins: number;
  number: string;
  oneCoin: boolean;
  twoCoin: boolean;
  fiveCoin: boolean;
  tenCoin: boolean;
}

interface Drink {
  id: number;
  name: string;
  cost: number;
  amount: number;
  image: any;
}

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})

export class UserViewComponent implements OnInit {
  sum: number = 0;
  machineCoins: number = 0;
  machineId: number = 0;
  drinks: Drink[];
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDrinks().subscribe((data:Drink[]) => 
    {
      this.drinks = data.slice();
    });

    this.apiService.getMachineCoins().subscribe((data: Machine[]) => 
    { 
      this.machineCoins = data[this.machineId].coins;

    });
  }

  coinDown(coin: number) {
    this.sum += coin;
  }
}
