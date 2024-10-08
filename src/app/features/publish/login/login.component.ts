import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/auth/auth.service';
import { FirebaseDbService} from '../../../shared/firebase-db/firebase-db.service'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { User } from '../../../shared/auth/user.model';
import { NotifyService } from '../../../shared/notify/notify.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginComponent {
	public username: string = "";
	
	auth = getAuth();
	constructor(
		private readonly authService: AuthService,
		private readonly router: Router,
		private readonly _notifyService: NotifyService,
	) {
		
	}

	async loginWithGoogle() {
		const provider = new GoogleAuthProvider();
		await signInWithPopup(this.auth, provider)
  		.then((result) => {
			console.log('result: ', result);
    		// This gives you a Google Access Token. You can use it to access the Google API.
    		const credential = GoogleAuthProvider.credentialFromResult(result);
			console.log('credential: ', credential);
    		const token = credential?.accessToken;
    		// The signed-in user info.
    		const user = result.user;
			console.log('user: ', user);
			let res = this.authService.login({
				photoURL: user.photoURL ?? '',
				displayName: user.displayName ?? '',
				email: user.email ?? '',
				isActive: false,
				role: ['user']
			}, {
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
			console.log('error: ', error);
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
