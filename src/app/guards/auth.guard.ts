import { Injectable } from '@angular/core';
import { CanActivateFn ,CanActivate,Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('token'); // Example check
    if (!isAuthenticated) {
      this.router.navigate(['/']); // Redirect to login if not authenticated
      return false;
    }
    return true;
  }
}
// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
  
// };
