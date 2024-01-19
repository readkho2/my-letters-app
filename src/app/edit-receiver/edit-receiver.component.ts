// edit-receiver.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LetterService } from '../letter.service';

@Component({
  selector: 'app-edit-receiver',
  templateUrl: './edit-receiver.component.html',
  styleUrls: ['./edit-receiver.component.scss'],
})
export class EditReceiverComponent {
  constructor(private router: Router, private letterService: LetterService) {}

  addLine(): void {
    // Logique pour ajouter une ligne
  }

  cancel(): void {
    this.router.navigate(['/editor']);
  }

  applyChanges(): void {
    // Logique pour appliquer les modifications
    this.router.navigate(['/editor']);
  }
}
