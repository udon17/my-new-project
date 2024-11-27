import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  result: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.result = navigation?.extras.state?.['result'] || '診断結果がありません';
  }

  restart(): void {
    this.router.navigate(['/']);
  }
}