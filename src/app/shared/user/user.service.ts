import { Injectable } from '@angular/core';
import { FirestoreService } from '../firebase-db/firestore.service';
import { UserRepository } from './user-repository';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private _userRepository: UserRepository) { }

	public activeUser(id: string, data: User) {
		return this._userRepository.update(id, data);
	}
}
