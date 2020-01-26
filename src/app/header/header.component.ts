import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  signEdIn: boolean;
  user: any;
  greetings: string;
  
  ngOnInit() {
  }
  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.authStateChange$
      .subscribe(authSate => {
        this.signEdIn = authSate.state === 'signedIn';
        if (!authSate.user) {
          this.user = null;
        } else {
          this.user = authSate.user;
          this.greetings = " this.user.username";
        }
      });
  }
}
