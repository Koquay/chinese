import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { RequestInterceptor } from './shared/interceptors/request-interceptor';
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    FormsModule,
    SharedModule,
    NgxStripeModule.forRoot('pk_test_zG3kv6VtWOPTLvijoeeRZFZq00Gb2MWxiZ'),
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:RequestInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
