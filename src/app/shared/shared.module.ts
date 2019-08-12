import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { TabPaneComponent } from './components/tab-pane/tab-pane.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TabPaneComponent,
    PageHeaderComponent,    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TabPaneComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ]
})
export class SharedModule { }
