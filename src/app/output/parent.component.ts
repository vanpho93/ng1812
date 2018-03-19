import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <div>
            <h3>Count = {{ count }}</h3>
            <app-child></app-child>
        </div>
    `
})

export class ParentComponent {
    count = 1;

    increase() { this.count++; }
    descrease() { this.count--; }
    reset() { this.count = 0; }
}
