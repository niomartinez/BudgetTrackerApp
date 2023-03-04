import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIncomeComponent } from './components/income/add-income/add-income.component';
import { ListIncomeComponent } from './components/income/list-income/income-list/list-income.component';
import { AddSourceComponent } from './components/source/add-source/add-source/add-source.component';
import { ListSourceComponent } from './components/source/list-source/list-source/list-source.component';

const routes: Routes = [
  {
    path: '',
    component: ListIncomeComponent
  },
  {
    path: 'income',
    component: ListIncomeComponent
  },
  {
    path: 'income/add',
    component: AddIncomeComponent
  },
  {
    path: 'source',
    component: ListSourceComponent
  },
  {
    path: 'source/add',
    component: AddSourceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
