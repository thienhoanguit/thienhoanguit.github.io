import { Component } from '@angular/core';
import { AuthService } from '../../../shared/auth/auth.service';
import { User } from '../../../shared/user/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {
  user: User | undefined;
  constructor(private _authService: AuthService, private _router: Router) {
    this.user = _authService.user;
  }

  createOrEdit(item?: any) {
    this._router.navigateByUrl('/note/detail/', {
      onSameUrlNavigation: 'reload',
      skipLocationChange: true,
    });
  }
}
