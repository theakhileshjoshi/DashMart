import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard {
    constructor(
        private authService: AuthService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        var isAuthenticated = this.authService.isUserLoggedIn();
        if (!isAuthenticated) {
            this.router.navigate(['login']);
        }
        return isAuthenticated;
    }
}
