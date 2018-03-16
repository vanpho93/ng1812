import { Component } from '@angular/core';

@Component({
    selector: 'app-word',
    template: `
        <div>
            <h4 class="text-success">
              One
            </h4>
            <p>Mot</p>
            <button class="btn btn-danger">
              Remove
            </button>
            <button class="btn btn-success">
              Toggle
            </button>
        </div>
    `
})

export class WordComponent {}
