import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, updateDoc, deleteDoc, getDocs, query, where, DocumentData } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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
    } else {
      return null; // Nếu không tìm thấy đối tượng
    }
  }
}
