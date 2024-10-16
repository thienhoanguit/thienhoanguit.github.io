import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';
import { NotifyService } from '../../shared/notify/notify.service';
import { User } from '../../shared/user/user.model';
import { UserRepository } from '../../shared/user/user-repository';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrl: './publish.component.scss'
})
export class PublishComponent {
	items: MenuItem[] | undefined;
	auth = getAuth();
  constructor(
		private readonly authService: AuthService,
		private readonly router: Router,
		private readonly _notifyService: NotifyService,
		private readonly _userRepo: UserRepository) {
      this.items = [
        {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink: '/'
        }
      ];
    }
	async loginWithGoogle() {
		const provider = new GoogleAuthProvider();
		await signInWithPopup(this.auth, provider)
  		.then(async (result) => {
    		// This gives you a Google Access Token. You can use it to access the Google API.
    		const credential = GoogleAuthProvider.credentialFromResult(result);
    		const token = credential?.accessToken;
    		// The signed-in user info.
    		const user = result.user;
			let u = new User(user.displayName ?? '', 
				user.email ?? '',
				user.photoURL ?? '',
				['user'],
				false
				);
			let res = await this.authService.login(u, {
				accessToken: credential?.accessToken ?? '',
				idToken: credential?.idToken ?? ''
			});
			if (res.status) {
				this.router.navigateByUrl('/', {
					onSameUrlNavigation: 'reload',
					skipLocationChange: false,
				});
			} else {
				this._notifyService.error(res.message);
			}
  		}).catch((error) => {
    		// Handle Errors here.
    		const errorCode = error.code;
    		const errorMessage = error.message;
    		// The email of the user's account used.
    		const email = error.customData.email;
    		// The AuthCredential type that was used.
    		const credential = GoogleAuthProvider.credentialFromError(error);
  		});
	  }

}
