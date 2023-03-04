import { Component } from '@angular/core';
import { Income, Source } from 'src/app/models/income.model';
import { IncomesService } from 'src/app/services/incomes/incomes.service';

@Component({
  selector: 'app-list-income',
  templateUrl: './list-income.component.html',
  styleUrls: ['./list-income.component.css']
})
export class ListIncomeComponent {
  testSource: Source = { id: '123abc', name: 'Salary' }
  incomes: Income[] = [];
  constructor(private incomesService: IncomesService) { }

  ngOnInit(): void {
    this.incomesService.getAllIncomes()
      .subscribe({
        next: (incomes) => {
          this.incomes = incomes;
        },
        error: (response) => {
          console.log(response);
        }
      })
  }
}
