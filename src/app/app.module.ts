import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VkAuthComponent } from './vk-auth/vk-auth.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AuthGuard } from './auth.guard';
import { AuthBackendService } from './auth-backend.service';


@NgModule({
  declarations: [
    AppComponent,
    VkAuthComponent,
    MainpageComponent,
    AuthorizationComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: VkAuthComponent },
      { path: 'mainpage', component: MainpageComponent },
      { path: 'login', component: AuthorizationComponent },
      { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] }
    ]),
    HttpClientJsonpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [AuthBackendService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
