// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean {
//     const isActive = this.authService.isActive(); // Giả sử AuthService có phương thức này
//     if (isActive) {
//       return true;
//     } else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }
