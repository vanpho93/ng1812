import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  txtEn = '';
  txtVn = '';
  isShowForm = false;
  imageSource = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  words: Word[] = [
    { en: 'One', vn: 'Mot', isMemorized: true, _id: 'abcd1' },
    { en: 'Two', vn: 'Hai', isMemorized: false, _id: 'abcd2' },
    { en: 'Three', vn: 'Ba', isMemorized: false, _id: 'abcd3' },
    { en: 'Four', vn: 'Bon', isMemorized: true, _id: 'abcd4' }
  ];
  
  memorizedStyle = {
    fontWeight: 500,
    color: 'green'
  }

  forgotStyle = {
    fontWeight: 900,
    color: 'red'
  }

  toggleForm() {
    this.isShowForm = !this.isShowForm;
  }

  removeWord(_id: string) {
    const index = this.words.findIndex(word => word._id === _id);
    this.words.splice(index, 1);
  }

  toggleWord(_id: string) {
    const word = this.words.find(word => word._id === _id);
    word.isMemorized = !word.isMemorized;
  }

  addWord() {
    const { txtEn, txtVn } = this;
    this.words.unshift({
      en: txtEn, vn: txtVn, isMemorized: false, _id: Math.random() +''
    });
    this.txtEn = '';
    this.txtVn = '';
    this.toggleForm();
  }
}

interface Word {
  _id: string;
  en: string;
  vn: string;
  isMemorized: boolean;
}
