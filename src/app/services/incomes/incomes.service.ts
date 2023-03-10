import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.local';
import { Observable } from 'rxjs';
import { Income } from 'src/app/models/income.model';

@Injectable({
  providedIn: 'root'
})
export class IncomesService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllIncomes(): Observable<Income[]> {
    return this.http.get<Income[]>(this.baseApiUrl + '/api/income');
  }

  addIncome(addIncomeRequest: Income): Observable<Income> {
    addIncomeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Income>(this.baseApiUrl + '/api/income', addIncomeRequest)
  }
}
