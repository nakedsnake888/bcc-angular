import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { Credentials } from './../interfaces';
import { faUser, faKey, faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  faKey = faKey;

  constructor(private authService: AuthService, private router: Router,
    private route: ActivatedRoute,) {}

  private credentials: Credentials;

  ngOnInit() {
    this.credentials = { password: "", username: "" };
  }

  //Metodo per effettuare una richiesta di login.
  login() {
    this.authService.login(this.credentials).subscribe((valid) => {
      if (valid) {
        let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
        this.router.navigate([returnUrl || "/ricerca"]);
      }
    });
  }
}
