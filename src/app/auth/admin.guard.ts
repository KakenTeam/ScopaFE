import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.validateUser().pipe(map((user: any) => {
      if (user.admin) {
        return true;
      }
      this.authService.userSignedIn$.next(false);
      this.router.navigate(["/login"]);
      return false;
    }))
  }
}
