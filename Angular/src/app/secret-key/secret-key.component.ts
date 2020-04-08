import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { ApiService, Drink, Machine } from '../shared/api.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-secret-key',
  templateUrl: './secret-key.component.html',
  styleUrls: ['./secret-key.component.scss']
})

export class SecretKeyComponent implements OnInit {
  @ViewChild('chooseImg') chooseImg: ElementRef;
  @ViewChild('importJSON') importJSON: ElementRef;

  drinks: Drink[];
  selectedDrink: Drink;
  newDrink: Drink;
  addItem: boolean = false;
  machine: Machine;
  importData: any[];

  constructor(private apiService: ApiService) { 
    this.selectedDrink = {id: undefined, name: undefined, cost: undefined, amount: undefined, image: undefined};
    this.newDrink = {id: undefined, name: undefined, cost: undefined, amount: undefined, image: undefined};
    this.machine = {id: undefined, coins: undefined, number: undefined, oneCoin: undefined, twoCoin: undefined, fiveCoin: undefined, tenCoin: undefined}
  }

  ngOnInit(): void {
    this.loadDrinks();
    this.loadMachine();
  }

  loadMachine() {
    this.apiService.getMachines().subscribe((data: Machine[]) => { 
      this.machine = data[0];
    });
  }

  machineSave() {
    this.apiService.putMachine(this.machine).subscribe();
  }

  loadDrinks() {
    this.apiService.getDrinks().subscribe((data: Drink[]) => {
      this.drinks = data.slice();
      this.drinks.map(x => x.image = "data:image/jpeg;base64," + x.image);
      this.selectedDrink.id = this.drinks[0].id;
      this.selectedDrink.name = this.drinks[0].name;
      this.selectedDrink.cost = this.drinks[0].cost;
      this.selectedDrink.amount = this.drinks[0].amount;
      this.selectedDrink.image = this.drinks[0].image;
    });
  }

  changeDrink(id: number) {
    this.chooseImg.nativeElement.value = "";
    this.drinks.forEach(element => {
      if (element.id == id){
        this.selectedDrink.id = element.id;
        this.selectedDrink.name = element.name;
        this.selectedDrink.cost = element.cost;
        this.selectedDrink.amount = element.amount;
        this.selectedDrink.image = element.image;
      }
    });
  }

  updateDrink() {
    this.drinks.forEach(element => {
      if (element.id == this.selectedDrink.id) {
        element.name = this.selectedDrink.name;
        element.cost = this.selectedDrink.cost;
        element.amount = this.selectedDrink.amount;
        element.image = this.selectedDrink.image;
      }
    });
    this.apiService.putDrink({id: this.selectedDrink.id, 
                              name: this.selectedDrink.name, 
                              cost: this.selectedDrink.cost, 
                              amount: this.selectedDrink.amount, 
                              image: this.selectedDrink.image}).subscribe();
  }

  createDrink() {
    this.apiService.postDrink({id: this.newDrink.id, 
                              name: this.newDrink.name, 
                              cost: this.newDrink.cost, 
                              amount: this.newDrink.amount, 
                              image: this.newDrink.image}).subscribe(() => this.loadDrinks());
  }
  
  deleteDrink(id: number) {
    this.apiService.deleteDrink(id).subscribe(() => this.loadDrinks());
  }

  handleFileInput(files: FileList, type: string) {
    if(type == "import") {
      this.getJSON(files.item(0), (e) => {
        this.importJSON.nativeElement.value = "";
        this.importData = JSON.parse(e.target.result);
        this.importData.forEach(element => {
          this.apiService.postDrink({id: element.id, 
                                    name: element.name, 
                                    cost: element.cost, 
                                    amount: element.amount, 
                                    image: element.image}).subscribe(() => this.loadDrinks());
        })
      })
    } else {
      this.getBase64(files.item(0), (e) => {
        if (type == "update") {
          this.selectedDrink.image = e.target.result;
        } else if (type == "add") {
          this.newDrink.image = e.target.result;
        }
      });
    }
  }

  getBase64(file, onLoadCallback) {
    const reader = new FileReader();
    reader.onload = onLoadCallback;
    reader.readAsDataURL(file);
  }

  getJSON(file, onLoadCallback) {
    const reader = new FileReader();
    reader.onload = onLoadCallback;
    reader.readAsText(file, "UTF-8");
  }
}
