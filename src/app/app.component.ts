import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  signEdIn: boolean;
  user: any;
  greetings: string;

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
