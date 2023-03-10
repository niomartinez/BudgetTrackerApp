import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListIncomeComponent } from './components/income/list-income/income-list/list-income.component';
import { AddIncomeComponent } from './components/income/add-income/add-income.component';
import { ListSourceComponent } from './components/source/list-source/list-source/list-source.component';
import { AddSourceComponent } from './components/source/add-source/add-source/add-source.component';
import { FormsModule } from '@angular/forms';

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
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddIncomeComponent]
})
export class AppModule { }
