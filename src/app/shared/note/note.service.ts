import { Injectable } from '@angular/core';
import { FirestoreService } from '../firebase-db/firestore.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private colName: string = 'notes';
  constructor(private _firestoreService: FirestoreService, private _authService: AuthService) { }

  public getList() {
    return this._firestoreService.filterDocumentsByField(this.colName, 'userId', this._authService.user?.id ?? '');
  }

  public getById(id: string) {
    return this._firestoreService.filterDocumentByField(this.colName, 'id', id);
  }

  public update(id: string, data: boolean) {
    return this._firestoreService.updateDocument(this.colName, id, {isActive:  data});
  }
}
