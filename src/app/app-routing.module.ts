import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from "./_guards/auth-guard.service";
import { RicercaComponent } from './ricerca/ricerca.component';
import { ModalContainerComponent } from './modal-container.component';

const routes: Routes = [
  { path: "", canActivate: [AuthGuardService],component:HomeComponent },
  { path: "ricerca", canActivate: [AuthGuardService], component:RicercaComponent },
  { path: 'dettagli/:id', outlet: 'modal', canActivate: [AuthGuardService], component: ModalContainerComponent },
  { path: "home", canActivate: [AuthGuardService], component:HomeComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
