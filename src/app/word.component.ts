import { Component } from '@angular/core';

@Component({
    selector: 'app-word',
    template: `
        <div>
            <h4 style="color: red" *ngIf="!isMemorized">{{ en }}</h4>
            <h4 style="color: green" *ngIf="isMemorized">{{ en }}</h4>
            <p>{{ vn }}</p>
            <button
                class="{{ isMemorized ? 'btn btn-danger' : 'btn btn-success' }}"
                (click)="toggleIsMemorized();"
            >
                Toggle
            </button>
        </div>
    `,
    styles: [
        'h3 { color: blue }'
    ]
})

export class WordComponent {
    en = 'One';
    vn = 'Mot';
    isMemorized = true;

    toggleIsMemorized() { this.isMemorized = !this.isMemorized }
}

// modules.export = { WordComponent }
