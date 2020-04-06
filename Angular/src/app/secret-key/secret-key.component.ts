import { Component, OnInit } from '@angular/core';
import { ApiService, Drink, Machine } from '../shared/api.service';

@Component({
  selector: 'app-secret-key',
  templateUrl: './secret-key.component.html',
  styleUrls: ['./secret-key.component.scss']
})

export class SecretKeyComponent implements OnInit {
  drinks: Drink[];
  selectedDrink: Drink;

  constructor(private apiService: ApiService) { 
    this.selectedDrink = {id: undefined, name: undefined, cost: undefined, amount: undefined, image: undefined};
  }

  ngOnInit(): void {
    this.apiService.getDrinks().subscribe((data: Drink[]) => 
    {
      this.drinks = data.slice();
      this.selectedDrink.id = data[0].id;
      this.selectedDrink.name = data[0].name;
      this.selectedDrink.cost = data[0].cost;
      this.selectedDrink.amount = data[0].amount;
      this.selectedDrink.image = "data:image/jpg;base64," + data[0].image;
    });
  }

  changeDrink(id: any) {
    this.drinks.forEach(element => {
      if (element.id == id){
        this.selectedDrink.id = element.id;
        this.selectedDrink.name = element.name;
        this.selectedDrink.cost = element.cost;
        this.selectedDrink.amount = element.amount;
        this.selectedDrink.image = "data:image/jpg;base64," + element.image;
      }
    });
  }

  updateDrink() {
    this.selectedDrink.image = <string>this.selectedDrink.image.replace("data:image/jpg;base64,", "");

    this.apiService.putDrink(this.selectedDrink) // try parse
      .subscribe();
  }

}
