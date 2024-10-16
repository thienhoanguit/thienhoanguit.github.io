import { AngularFirestore, AngularFirestoreCollection, QueryFn } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseModel } from './base.model';
import { AuthService } from '../auth/auth.service';

export class GenericRepository<T extends BaseModel> {
  private collection: AngularFirestoreCollection<T>;

  constructor(protected firestore: AngularFirestore, collectionName: string) {
    this.collection = this.firestore.collection<T>(collectionName);
  }

  getAll(): Observable<T[]> {
    return this.collection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as T;
          const id = a.payload.doc.id;
          return data;
        })
      )
    );
  }

  getById(id: string): Observable<T | undefined> {
    return this.collection.doc(id).valueChanges();
  }

  add(item: T): Promise<void> {
    const id = this.firestore.createId();
    item.id = id;
    item.createdAt = new Date();
    item.modifiedAt = new Date();
    const user = JSON.parse(String(localStorage.getItem('user')));
    item.userId = user?.id ?? '';
    const plainObject = item.toPlainObject();
    console.log('plainObject: ', plainObject);
    return this.collection.doc(id).set(plainObject);
  }

  update(id: string, item: T): Promise<void> {
    item.setModifiedAt();
    return this.collection.doc(id).update(item.toPlainObject());
  }

  delete(id: string): Promise<void> {
    return this.collection.doc(id).delete();
  }

  query(queryFn: QueryFn): Observable<T[]> {
    return this.firestore.collection<T>(this.collection.ref.path, queryFn).snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as T;
          const id = a.payload.doc.id;
          return data;
        })
      )
    );
  }

  queryFirst(queryFn: QueryFn): Observable<T | undefined> {
    return this.firestore.collection<T>(this.collection.ref.path, queryFn).snapshotChanges().pipe(
      map(actions => {
        if (actions.length > 0) {
          const data = actions[0].payload.doc.data() as T;
          const id = actions[0].payload.doc.id;
          return data;
        }
        return undefined;
      })
    );
  }
}
