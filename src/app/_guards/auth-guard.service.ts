import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../_services/auth.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
