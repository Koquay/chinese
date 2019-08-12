import { Injectable } from '@angular/core';
import { of, forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TabPaneService {
  private quantities;
  private menuData;

  constructor() {
    this.createDB();
  }

  public getMenuStaticData() {
    return forkJoin([
      this.getQuantities(), this.getMenuData()
    ])
  }

  private createDB() {
    this.quantities = [
      {value: 1 },
      {value: 2 },
      {value: 3 },
      {value: 4 },
      {value: 5 },
      {value: 6 },
      {value: 7 },
      {value: 8 },
      {value: 9 },
      {value: 10 }
    ];

    this.menuData = [
      {type: "salad-bread", label: "Salads Bread", images:["ezgif-1-6965031add78.jpg", "ezgif-1-c65402310465.jpg"]},      
      {type: "soups", label: "Appetizers", images:["ezgif-1-996cbefe7ae2.jpg", "ezgif-1-3a81ee2e61ce.jpg"]},
      {type: "appetizers", label: "Soups", images:["ezgif-1-c44ca2b4636f.jpg", "ezgif-1-876df0cd96c0.jpg"]},
      {type: "chow-mein", label: "Chow Mein", images:["ezgif-1-de74b2937ab0.jpg", "ezgif-1-0974ac1d262c.jpg"]},
      {type: "rice", label: "Rice", images:["ezgif-1-cb7d7f733678.jpg", "ezgif-1-9d96d3e679f7.jpg"]},
      
    ]
  }

  public getQuantities() {
    return of(this.quantities);
  }

  public getMenuData() {
    return of(this.menuData);
  }
}
