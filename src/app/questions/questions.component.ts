import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  questions: any[] = [];
  answers: number[] = [];
  currentPage: number = 0;
  questionsPerPage: number = 4;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getQuestions().subscribe((data) => {
      this.questions = data.questions;
      this.answers = new Array(this.questions.length).fill(0);
    });
  }

  getCurrentPageQuestions(): any[] {
    const start = this.currentPage * this.questionsPerPage;
    const end = start + this.questionsPerPage;
    return this.questions.slice(start, end);
  }

  getTotalPages(): number {
    return Math.ceil(this.questions.length / this.questionsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < Math.ceil(this.questions.length / this.questionsPerPage) - 1) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  submit(): void {
    this.apiService.submitAnswers(this.answers).subscribe((result) => {
      this.router.navigate(['/result'], { state: { result: result.result } });
    });
  }

}
