import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Menu } from '../shared/models/data-model';
import { TabPaneService } from '../shared/components/tab-pane/tab-pane.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private menu:Menu[];
  private currentMenu:Menu[];
  private isLoading = false;
  private menuData;
  private activeTab = 'salad-bread';

  constructor(
    private homeService:HomeService,
    private tabPaneService:TabPaneService
  ) { }

  ngOnInit() {
    this.getMenu();
    this.getMenuStaticData();
  }

  private getMenu() {    
    this.homeService.getMenu().subscribe(menu => {
      this.menu = menu;
      this.loadMenu('salad-bread');
    })
  }

  private loadMenu(type) {
    this.isLoading = true;
    this.currentMenu = this.menu.filter(menu => menu.type == type);
    this.activeTab = type;
    this.isLoading = false;
    console.log('currentMenu', this.currentMenu)
  }

  private addToOrder(item) {
    console.log('menu item', item)
  }

  private getMenuStaticData() {
    this.tabPaneService.getMenuStaticData().subscribe(data => {
      this.menuData = data[1];
      console.log('static data', data)
    })
  }
}
