import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, QuerySnapshot } from '@angular/fire/compat/firestore';
import { Observable, from, map } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
  export class RepositoryService {

  constructor(private afs: AngularFirestore) {}

  // Create a new document
  create(collectionName: string, data: any): Observable<any> {
    return from(this.afs.collection(collectionName).add(data)).pipe(
      map(docRef => docRef.id)
    );
  }

  // Update an existing document
  update(collectionName: string, id: string, data: any): Observable<void> {
    return from(this.afs.collection(collectionName).doc(id).update(data));
  }

  // Delete an existing document
  delete(collectionName: string, id: string): Observable<void> {
    return from(this.afs.collection(collectionName).doc(id).delete());
  }

  // Get a list of documents
  getList(collectionName: string): Observable<any[]> {
    return this.afs.collection(collectionName).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;
        return data;   

      }))
    );
  }

  // Get a single document by ID
  getById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }



  }