import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-word-form',
    template: `
    <div class="form-group" style="width: 200px">
        <button
          class="btn btn-success form-control"
          *ngIf="!isShowForm" 
          (click)="toggleForm();" 
        >
          Add word
        </button>
        <div *ngIf="isShowForm">
          <input class="form-control" placeholder="English" [(ngModel)]="txtEn">
          <br>
          <input class="form-control" placeholder="Vietnamese" [(ngModel)]="txtVn">
          <br>
          <button
            class="btn btn-success form-control"
            (click)="addWord();"
          >
            Add word
          </button>
          <br>
          <br>
          <button
            class="btn btn-danger form-control"
            (click)="toggleForm();" 
          >
            Cancel
          </button>
        </div>
        <br>
      </div>
    `
})

export class WordFormComponent {
  isShowForm = false;
  txtEn = '';
  txtVn = '';
  @Output() onAddWord = new EventEmitter();
  toggleForm() {
    this.isShowForm = !this.isShowForm;
  }

  addWord() {
    const word = { 
      _id: Math.random() + '',
      en: this.txtEn,
      vn: this.txtVn,
      isMemorized: true
    };
    this.onAddWord.emit(word);
    this.txtEn = '';
    this.txtVn = '';
    this.isShowForm = false;
  }
}
