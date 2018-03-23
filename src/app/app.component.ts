import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ count | async }}</p>
    <button (click)="increase();">Increase</button>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  count: Observable<number>;
  constructor(private store: Store<any>){
    this.count = store.pipe(select('count'));
  }

  increase() {
    this.store.dispatch({ type: 'INCREASE' });
  }
}
