import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/questions`);
  }

  submitAnswers(answers: number[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/submit`, { answers });
  }
}