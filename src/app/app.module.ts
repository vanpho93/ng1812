import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { ListWordComponent } from './list-word/list-word.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ListWordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
