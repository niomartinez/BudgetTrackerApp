import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Income, Source } from 'src/app/models/income.model';
import { IncomesService } from 'src/app/services/incomes/incomes.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent {
  @Output() success: EventEmitter<Income> = new EventEmitter<Income>();
  today: Date = new Date();
  sourceRequest: Source = { id: '00000000-0000-0000-0000-000000000000', name: 'Salary' }
  addIncomeRequest: Income = {
    id: '',
    source: this.sourceRequest,
    amount: 0,
    date: this.today
  }
  constructor(private incomeService: IncomesService, private router: Router) { }

  addIncome() {
    this.incomeService.addIncome(this.addIncomeRequest)
      .subscribe({
        next: (income) => {
          this.success.emit(income);
        }
      });
  }
}
