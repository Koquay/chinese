import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Menu } from '../shared/models/data-model';
import { of } from 'rxjs';
import { MessageService } from '../shared/message/message/message.service';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private menuUrl = '/api/menu/';  

  constructor(
    private httpClient: HttpClient,
    private messageService:MessageService
  ) {}

  public getMenu() {
    return this.httpClient.get<Menu[]>(this.menuUrl).pipe(
      map(menu => {
        console.log('menu', menu)
        menu = this.addQuantities(menu);
        return menu;
      }),
      catchError(error => {
        this.messageService.sendErrorMessage(error);
        throw error;
      })
    )
  }  

  private addQuantities(menu) {
    for(let m of menu) {
      m.quantity = 1;      
    }

    console.log('menu', menu)
    return menu;
  }
}
