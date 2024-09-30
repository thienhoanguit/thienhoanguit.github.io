import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss'
})
export class HomeComponent {
	items: MenuItem[] | undefined;

	constructor(
		private readonly _authService: AuthService,
		private readonly router: Router){}
	ngOnInit() {
		this.items = [
			{
				label: 'Toeic',
				icon: 'pi pi-home',
				routerLink: '/toeic'
			}
			
		]
	}

	
	public logout() {
		this._authService.logout();
		this.router.navigateByUrl('/', {
			onSameUrlNavigation: 'reload',
			skipLocationChange: false,
		});
	}
}
