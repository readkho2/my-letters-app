// letter.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LetterService {
  private letters: any[] = [];

  getLetters(): any[] {
    return this.letters;
  }

  addLetter(letter: any): void {
    this.letters.push(letter);
  }

  updateLetter(index: number, letter: any): void {
    this.letters[index] = letter;
  }
}
