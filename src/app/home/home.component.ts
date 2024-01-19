// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LetterService } from '../letter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router, private letterService: LetterService) {}

  navigateToEditor(): void {
    this.router.navigate(['/editor']);
  }
}
