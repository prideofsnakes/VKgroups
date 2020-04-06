import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthBackendService {
  
	public error$: Subject<string> = new Subject<string> ();


  user : Object = {
  	email: null,
  	password: null,
  	returnSecureToken: true

  };	
  constructor(private http : HttpClient) { }

  login (user) : Observable<any> {
  	return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=<API KEY>`, user)
  	.pipe(tap(this.setToken), catchError(this.showError.bind(this)));
  }

  		showError(response : HttpErrorResponse) {

  			const {message} = response.error.error;
  			switch (message) {
  			 	case "EMAIL_NOT_FOUND":
  			 		this.error$.next('Емейл не найден');
  			 		break;
  			 	
  			 	case "INVALID_PASSWORD":
  			 		this.error$.next('Пароль не найден');
  			 		break;

  			 	case "INVALID_EMAIL":
  			 		this.error$.next('Неверный емейл');
  			 		break;
  			 } 
  			return throwError(response);
  		}

  logout () {
  	this.setToken(null);
  }

  isAuth () : boolean {
  	return !!this.token;
  }

  get token () : string {
  	const expDate = new Date (localStorage.getItem("expires"));
  	if (new Date() > expDate) {
  		this.logout();
  		return null;
  	}

  	return (localStorage.getItem("token"));
  }

  private setToken (response : any | null) {
  	console.log(response);
  	if (response) {const expDate = new Date (new Date().getTime() + +response.expiresIn*1000);
  	localStorage.setItem('token', response.idToken); 
  	localStorage.setItem('expires', expDate.toString());}
  	  else localStorage.clear();
  }
}
