import { Component } from '@angular/core';
import { Source } from 'src/app/models/income.model';
import { IncomesService } from 'src/app/services/incomes/incomes.service';
import { SourcesService } from 'src/app/services/sources/sources.service';
import { MatDialog } from '@angular/material/dialog';
import { AddSourceComponent } from '../../add-source/add-source/add-source.component';

@Component({
  selector: 'app-list-source',
  templateUrl: './list-source.component.html',
  styleUrls: ['./list-source.component.css']
})
export class ListSourceComponent {
  sources: Source[] = [];
  constructor(private sourceService: SourcesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.sourceService.getAllIncomes()
      .subscribe({
        next: (sources) => {
          this.sources = sources;
        },
        error: (response) => {
          console.log(response);
        }
      })
  }

  addSource(): void {
    const dialogRef = this.dialog.open(AddSourceComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
