import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthBackendService } from '../auth-backend.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private auth : AuthBackendService,
  			  private router : Router) { }

  ngOnInit() {
  }
  logout () {
  	this.auth.logout();
  	this.router.navigate(['/login']);
  }
}
