import { Component } from '@angular/core';
import { AuthService } from '../../../../shared/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../../shared/user/user.service';
import { Observable } from 'rxjs';
import { User } from '../../../../shared/user/user.model';
import { UserRepository } from '../../../../shared/user/user-repository';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
	users$: Observable<User[]>;
	public userList: any[] = [];
	constructor(private _authService: AuthService,
		private _router: Router,
		private _userService: UserService,
		private userRepository: UserRepository
		) {
		if (!_authService.isAdmin) {
			this._router.navigateByUrl('/', {
				onSameUrlNavigation: 'reload',
				skipLocationChange: false,
			});
		}
		this.users$ = this.userRepository.getAll();
	}

	public async onSwitchChange(e: any, user: User) {
		user.isActive = e.checked;
		await this._userService.activeUser(user.id, user);
	}
}
