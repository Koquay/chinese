import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chinese';

  constructor() {
    localStorage.removeItem('breadcrumbs')
    let breadcrumbs = [{breadcrumb: 'Home', url: '/home'}];
    localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs)) 
  }
}
