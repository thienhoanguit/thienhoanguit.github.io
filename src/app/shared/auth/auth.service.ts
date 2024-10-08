import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Credential } from './credential.model';
import { LoginResponse } from './login-response.model';
import { Database, get, ref, set } from '@angular/fire/database';
import { Router } from '@angular/router';
import { GoogleAuthProvider, getAuth, signOut } from 'firebase/auth';
import { FirestoreService } from '../firebase-db/firestore.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user = new BehaviorSubject<User | undefined>(void 0);
  private _credential = new BehaviorSubject<Credential | undefined>(void 0);
  // private dbPath = 'ls/users';
  private userColName = '/users';
	// users: User[] = [];

  public get user() {
    return this._user.value;
  }

  public get isLogged() {
    return this.user != null;
  }

  public get isAdmin() {
    return this.user != null && this.user.role != null && this.user.role.includes('admin');
  }

  constructor(
		// private readonly _firebaseDbService: FirebaseDbService,
    private readonly _firestoreService: FirestoreService
    ) {
    // this._firebaseDbService.getData('ls/users').subscribe(data => {
    //      this.users = data ? Object.values(data) : [];
    //       });
  
    try {
      const user = JSON.parse(String(localStorage.getItem('user')));
      if (user) {
        this._user.next(user);
      }
      const credential = JSON.parse(String(localStorage.getItem('credential')));
      if (credential) {
        this._credential.next(credential);
      }
    } catch {}
  }

  public async login(user: User, credential: Credential) : Promise<LoginResponse> {
    
    //checkuser
    let exist = await this._firestoreService.filterDocumentByField(this.userColName, 'email', user.email.toLocaleLowerCase());// this.users.find(_ => _.email == user.email);
    if (!exist || !exist.isActive) {
      if (!exist) {
        user.email = user.email.toLocaleLowerCase();
        await this._firestoreService.addDocument(this.userColName, user);
      }
      return {status: false, message: 'Bạn đã đăng ký tài khoản, vui lòng đợi quản trị viên duyệt'};
    } else {
      this._user.next(exist);
      this._credential.next(credential);
      localStorage.setItem('user', JSON.stringify(exist));
      localStorage.setItem('credential', JSON.stringify(credential));
      return {status: true, message: ''};
    }

  }

  public logout() {
    const provider = new GoogleAuthProvider();
		signOut(getAuth());
    this._user.next(void 0);
    this._credential.next(void 0);
    localStorage.removeItem('user');
    localStorage.removeItem('credential');
  }


}
