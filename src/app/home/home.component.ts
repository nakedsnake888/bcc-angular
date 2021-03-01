import { HttpResponse } from "@angular/common/http";
import { SimpleChanges } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ping: string;
  userPing:string;
  adminPing: string;

  //Inizializzazione valori della pagina (con Get).
  ngOnInit() {

    this.authService.ping().subscribe((response) => {
      this.ping=response.toString();
    });

    this.authService.userPing().subscribe((response) => {
      this.userPing=response.toString();
    });

    this.authService.adminPing().subscribe((response) => {
      this.adminPing=response.toString()
    }, error => this.adminPing="ERROR! Logged as User");

  }
}
