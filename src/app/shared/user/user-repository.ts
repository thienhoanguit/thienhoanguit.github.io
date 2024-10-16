import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { GenericRepository } from '../infrastructure/generic-repository';
import { User } from './user.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserRepository extends GenericRepository<User> {
  constructor(firestore: AngularFirestore) {
    super(firestore, 'users');  // Truyền tên collection là 'users'
  }
}
