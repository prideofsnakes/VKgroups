import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthBackendService } from '../auth-backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

	form : FormGroup;
  constructor(private auth : AuthBackendService,
  			  private router : Router) { }

  ngOnInit() {
  	this.form = new FormGroup({
  		email: new FormControl(null, [Validators.required]),
  		password: new FormControl(null, [Validators.required])
  	})
  }

  submit() {
  	if (this.form.invalid) console.log("invalid");
  	const user : Object = {
  		email: this.form.value.email,
  		password: this.form.value.password,
      returnSecureToken: true
  	}
  	
  	this.auth.login(user).subscribe(()=>this.router.navigate(['/welcome']));
  }

}
 