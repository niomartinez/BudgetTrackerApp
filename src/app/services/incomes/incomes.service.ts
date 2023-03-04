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
}
