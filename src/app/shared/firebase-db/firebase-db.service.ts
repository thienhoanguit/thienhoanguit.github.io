import { Injectable } from '@angular/core';
import { Database, ref, set, get, child, update, remove, onValue } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {
  constructor(private db: Database) { }

  // Lấy dữ liệu từ một đường dẫn
  getData(path: string): Observable<any> {
    const dataRef = ref(this.db, path);
    return new Observable((observer) => {
      onValue(dataRef, (snapshot) => {
        observer.next(snapshot.val());
      });
    });
  }

  // Thêm dữ liệu vào đường dẫn cụ thể
  addData(path: string, data: any): Promise<void> {
    const dataRef = ref(this.db, path);
    return set(dataRef, data);
  }

  // Cập nhật dữ liệu
  updateData(path: string, data: any): Promise<void> {
    const dataRef = ref(this.db, path);
    return update(dataRef, data);
  }

  // Xóa dữ liệu
  deleteData(path: string): Promise<void> {
    const dataRef = ref(this.db, path);
    return remove(dataRef);
  }
}
