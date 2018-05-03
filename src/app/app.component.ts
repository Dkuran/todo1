import { Component } from '@angular/core';

interface Person {
	name: string;
	lastName: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'Devil Inside';
	age = 28;
	person: Person = {
		name: 'Andres',
		lastName: 'Duran'
	};

	constructor() {
		this.person.lastName = 'Perez';
	}
}
