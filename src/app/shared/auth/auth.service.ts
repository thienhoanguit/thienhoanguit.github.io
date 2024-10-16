import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { User } from '../user/user.model';
import { Credential } from './credential.model';
import { LoginResponse } from './login-response.model';
import { Database, get, ref, set } from '@angular/fire/database';
import { Router } from '@angular/router';
import { GoogleAuthProvider, getAuth, signOut } from 'firebase/auth';
import { FirestoreService } from '../firebase-db/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserRepository } from '../user/user-repository';

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
    protected firestore: AngularFirestore, 
    private readonly _firestoreService: FirestoreService,
    private readonly userRepo: UserRepository
    ) {  
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
    // let exist = await this._firestoreService.filterDocumentByField(this.userColName, 'email', user.email.toLocaleLowerCase());// this.users.find(_ => _.email == user.email);
    let exist = await firstValueFrom(this.userRepo.queryFirst(_ => _.where('email', '==', user.email.toLocaleLowerCase())));
    console.log('Exsist: ', exist);
    if (!exist || !exist.isActive) {
      if (!exist) {
        user.email = user.email.toLocaleLowerCase();
        // user.createdAt = new Date();
        // user.id = this.firestore.createId();
        console.log('user: ', user);
        this.userRepo.add(user);
        // await this._firestoreService.addDocument(this.userColName, user);
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
