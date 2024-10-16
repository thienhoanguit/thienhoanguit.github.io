import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, updateDoc, deleteDoc, getDocs, query, where, DocumentData } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FilterModel } from './filter.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {}

  // Thêm tài liệu vào Firestore (tạo document mới trong collection)
  async addDocument(collectionName: string, data: any): Promise<void> {
    const collectionRef = collection(this.firestore, collectionName);
    const newDocRef = doc(collectionRef);
    return await setDoc(newDocRef, data);
  }

  // Đọc tất cả các tài liệu từ Firestore trong một collection
  getAllDocuments(collectionName: string): Observable<DocumentData[]> {
    const collectionRef = collection(this.firestore, collectionName);
    return collectionData(collectionRef, { idField: 'id' });
  }

  // Cập nhật tài liệu dựa trên ID
  async updateDocument(collectionName: string, docId: string, data: any): Promise<void> {
    const docRef = doc(this.firestore, `${collectionName}/${docId}`);
    return await updateDoc(docRef, data);
  }

  // Xóa tài liệu dựa trên ID
  async deleteDocument(collectionName: string, docId: string): Promise<void> {
    const docRef = doc(this.firestore, `${collectionName}/${docId}`);
    return await deleteDoc(docRef);
  }

  // Lọc tài liệu dựa trên một field cụ thể và trả về kết quả tương ứng
  async filterDocumentsByField(collectionName: string, field: string, value: string): Promise<any[]> {
    const collectionRef = collection(this.firestore, collectionName);
    const q = query(collectionRef, where(field, '==', value));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  }

  // Lọc tài liệu dựa trên một field cụ thể và chỉ trả về đối tượng đầu tiên
  async filterDocumentByField(collectionName: string, field: string, value: string): Promise<any> {
    const collectionRef = collection(this.firestore, collectionName);
    const q = query(collectionRef, where(field, '==', value));
    const querySnapshot = await getDocs(q);
    // Chỉ trả về đối tượng đầu tiên (nếu tồn tại)
    if (querySnapshot.docs.length > 0) {
      return querySnapshot.docs[0].data();
      // let d = querySnapshot.docs[0];
      // let data = d.data();
      // data['id'] = d.id;
      // console.log('d: ', d);
      // console.log('data: ', data);
      // return data;
    } else {
      return null; // Nếu không tìm thấy đối tượng
    }
  }

  async query(collectionName: string, filters?: FilterModel[]): Promise<any[]> {
    const collectionRef = collection(this.firestore, collectionName);
    let q = query(collectionRef);
    if ((filters ?? []).length > 0) {
      for (let index = 0; index < (filters ?? []).length; index++) {
        const element = (filters ?? [])[index];
        q = query(q, where(element.fieldName, element.opStr, element.value))
      }
    }
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
  }

  async queryFirst(collectionName: string, filters?: FilterModel[]): Promise<any> {
    return this.query(collectionName, filters).then(_ => _[0]);
  }
}
