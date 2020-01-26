import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProfileComponent } from './profile/profile.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AmplifyAngularModule,
    MDBBootstrapModule,
    FormsModule,
  ],
  providers: [
    AmplifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
