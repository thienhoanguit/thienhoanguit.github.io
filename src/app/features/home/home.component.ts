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
				label: 'Home',
				icon: 'pi pi-home',
				routerLink: '/'
			},
			{
				label: 'Toeic',
				icon: 'pi pi-home',
				routerLink: '/toeic'
			},
			{
				label: 'Ghi chú',
				icon: 'pi pi-pen-to-square',
				routerLink: '/note'
			},
			{
				label: 'Admin',
				icon: 'pi pi-user',
				visible: this._authService.isAdmin,
				items: [{
					routerLink: '/admin/users',
					label: 'Users'
				}
				]
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
