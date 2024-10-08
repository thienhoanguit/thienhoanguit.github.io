import { Component } from '@angular/core';
import { AuthService } from '../../../../shared/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../../shared/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
	public userList: any[] = [];
	constructor(private _authService: AuthService,
		private _router: Router,
		private _userService: UserService
		) {
		if (!_authService.isAdmin) {
			this._router.navigateByUrl('/', {
				onSameUrlNavigation: 'reload',
				skipLocationChange: false,
			});
		}
	}

	ngOnInit(){
		this._userService.getUsers().subscribe(val => {
			this.userList = val;
		});
	}

	public async onSwitchChange(e: any, id: string) {
		await this._userService.activeUser(id, e.checked);
	}
}
