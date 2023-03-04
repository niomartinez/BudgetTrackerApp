import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListSourceComponent } from './components/source/list-source/list-source/list-source.component';
import { AddSourceComponent } from './components/source/add-source/add-source/add-source.component';
import { AddIncomeComponent } from './components/income/add-income/add-income.component';
import { ListIncomeComponent } from './components/income/list-income/income-list/list-income.component';

@NgModule({
  declarations: [
    AppComponent,
    ListIncomeComponent,
    AddIncomeComponent,
    ListSourceComponent,
    AddSourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
