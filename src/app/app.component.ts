import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  words: Word[] = [
    { en: 'One', vn: 'Mot', isMemorized: true },
    { en: 'Two', vn: 'Hai', isMemorized: false },
    { en: 'Three', vn: 'Ba', isMemorized: false },
    { en: 'Four', vn: 'Bon', isMemorized: true }
  ];
}
interface Word {
  en: string;
  vn: string;
  isMemorized: boolean;
}
