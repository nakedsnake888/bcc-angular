import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import {faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bcc-angular';
  faUser = faUser;

  constructor(private authService: AuthService) {}

  get username() {
    return sessionStorage.getItem("user");
  }

  logout() {
    this.authService.logout();
  }
}
