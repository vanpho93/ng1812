import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-word',
    template: `
        <div>
            <h4 [class]="wordInfo.isMemorized ? 'text-success' : 'text-danger'">
              {{ wordInfo.en }}
            </h4>
            <p>{{ wordInfo.vn }}</p>
            <button class="btn btn-danger" (click)="removeWord();">
              Remove
            </button>
            <button class="btn btn-success" (click)="toggleWord();">
              Toggle
            </button>
        </div>
    `
})

export class WordComponent {
  @Input() wordInfo: any;
  @Output() onRemoveWord = new EventEmitter();
  @Output() onToggleWord = new EventEmitter();

  removeWord() {
    this.onRemoveWord.emit(this.wordInfo._id);
  }

  toggleWord() {
    this.onToggleWord.emit(this.wordInfo._id);
  }
}
