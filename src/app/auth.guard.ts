import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthBackendService } from './auth-backend.service';


@Injectable()
export class AuthGuard implements CanActivate {

constructor (private auth : AuthBackendService,
			 private router : Router) {}

canActivate (
	route: ActivatedRouteSnapshot,
	state: RouterStateSnapshot) : Observable <boolean> | Promise <boolean> | boolean {
	if (this.auth.isAuth()) return true;
	else {
		this.auth.logout();
		this.router.navigate(['/login'], {queryParams: {loginStatus: true} })
	}



}
}