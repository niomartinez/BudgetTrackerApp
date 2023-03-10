import { Component } from '@angular/core';
import { Income } from 'src/app/models/income.model';
import { IncomesService } from 'src/app/services/incomes/incomes.service';
import { MatDialog } from '@angular/material/dialog';
import { AddIncomeComponent } from '../../add-income/add-income.component';

@Component({
  selector: 'app-list-income',
  templateUrl: './list-income.component.html',
  styleUrls: ['./list-income.component.css']
})
export class ListIncomeComponent {
  incomes: Income[] = [];
  constructor(private incomesService: IncomesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.refreshIncomes();
  }

  refreshIncomes() {
    this.incomesService.getAllIncomes()
      .subscribe({
        next: (incomes) => {
          this.incomes = incomes;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  addIncome(): void {
    const dialogRef = this.dialog.open(AddIncomeComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.componentInstance.success.subscribe((income) => {
      dialogRef.close();
      this.refreshIncomes();
    });
  }
}
