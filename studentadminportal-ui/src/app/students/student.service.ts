import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = "https://localhost:44331";

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<any> {
    return this.httpClient.get<any>(this.baseApiUrl + '/students');
  }
}
