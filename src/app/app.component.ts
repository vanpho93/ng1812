import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app 123';
  num = 10;
  increase() { this.num++; }
  descrease() { this.num--; }
  reset() { this.num = 0; }
}
