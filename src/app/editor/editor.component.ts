// editor.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LetterService } from '../letter.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent {
  // Ajoutez des propriétés pour stocker les valeurs du formulaire
  senderName: string = '';
  senderAddress: string = '';
  receiverName: string = '';
  receiverAddress: string = '';
  date: string = '';
  letterTitle: string = '';
  letterBody: string = '';

  constructor(private router: Router, private letterService: LetterService) {}

  saveLetter(): void {
    // Créez un objet avec les données du formulaire
    const newLetter = {
      senderName: this.senderName,
      senderAddress: this.senderAddress,
      receiverName: this.receiverName,
      receiverAddress: this.receiverAddress,
      date: this.date,
      letterTitle: this.letterTitle,
      letterBody: this.letterBody,
    };

    // Ajoutez la lettre à notre service
    this.letterService.addLetter(newLetter);

    //  logique de Naviguation vers la page d'accueil
    this.router.navigate(['/']);
  }
}
