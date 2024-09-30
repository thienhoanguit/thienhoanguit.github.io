import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	items: MenuItem[] | undefined;

	ngOnInit() {
		this.items = [
			{
				label: 'Toeic',
				icon: 'pi pi-home',
				routerLink: '/toeic'
			}
			
		]
	}
}
