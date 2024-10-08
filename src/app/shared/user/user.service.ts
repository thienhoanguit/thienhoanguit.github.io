import { Injectable } from '@angular/core';
import { FirestoreService } from '../firebase-db/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private colName: string = 'users';
    constructor(private _firestoreService: FirestoreService) { }

    public getUsers() {
		return this._firestoreService.getAllDocuments(this.colName);
    }

	public activeUser(id: string, data: boolean) {
		return this._firestoreService.updateDocument(this.colName, id, {isActive:  data});
	}
}
