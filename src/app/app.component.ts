import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Введите имя:</label>
        <input [(ngModel)]="name" placeholder="name">
        <h1>Добро пожаловать {{name}}!</h1>`
})

//@ts-ignore
export class AppComponent {
    name= '';
}