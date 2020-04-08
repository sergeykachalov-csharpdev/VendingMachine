import { Component, OnInit } from '@angular/core';
import { ApiService, Drink, Machine } from '../shared/api.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})

export class UserViewComponent implements OnInit {
  sum: number = 0;
  machine: Machine;
  drinks: Drink[];
  
  constructor(private apiService: ApiService) {
    this.machine = {id: undefined, coins: undefined, number: undefined, oneCoin: undefined, twoCoin: undefined, fiveCoin: undefined, tenCoin: undefined}
  }

  ngOnInit(): void {
    this.apiService.getDrinks().subscribe((data: Drink[]) => 
    {
      this.drinks = data.slice();
    });

    this.apiService.getMachines().subscribe((data: Machine[]) => 
    { 
      this.machine = data[0];
    });
  }

  coinDown(coin: number) {
    this.sum += coin;
    this.machine.coins += coin;
  }

  getChange() {
    this.machine.coins -= this.sum;
    this.sum = 0;
    this.apiService.putMachine(this.machine).subscribe();
  }

  buyDrink(id:number) {
    this.drinks.forEach(element => {
      if (element.id == id) {
        if (this.sum >= element.cost && element.amount > 0) {
          element.amount--;
          this.sum -= element.cost;
          this.apiService.putMachine(this.machine).subscribe();
          this.apiService.putDrink(element).subscribe();
        }
      }
    })
  }
}
