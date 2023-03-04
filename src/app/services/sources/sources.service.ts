import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { Observable } from 'rxjs';
import { Source } from 'src/app/models/income.model';

@Injectable({
  providedIn: 'root'
})
export class SourcesService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllIncomes(): Observable<Source[]> {
    return this.http.get<Source[]>(this.baseApiUrl + '/api/source');
  }
}
